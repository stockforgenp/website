/**
 * Website Customer Inquiries Service
 * Submits inquiries to the StockForge Backend API (POST /api/v1/inquiries)
 * with graceful fallback to local confirmation so the user is never blocked.
 */

const API_BASE_URL =
  (import.meta as any).env?.VITE_API_URL || "http://localhost:5000/api/v1";

export interface CreateEnquiryInput {
  reference_id?: string;
  full_name: string;
  shop_name?: string;
  email: string;
  phone: string;
  store_type?: string;
  inquiry_type?: string;
  subject?: string;
  message: string;
}

export interface EnquiryResult {
  reference_id: string;
  full_name: string;
  shop_name?: string | null;
  email: string;
  phone: string;
}

export async function submitEnquiry(input: CreateEnquiryInput): Promise<EnquiryResult> {
  const fullName = input.full_name.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();
  const message = input.message.trim();

  if (!fullName) {
    throw new Error('Full name is required.');
  }
  if (!email || !email.includes('@')) {
    throw new Error('A valid email address is required.');
  }
  if (!phone) {
    throw new Error('Phone number is required.');
  }
  if (!message) {
    throw new Error('Message is required.');
  }

  const randomSeq = Math.floor(1000 + Math.random() * 9000);
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const fallbackRefId = input.reference_id || `INQ-${dateStr}-${randomSeq}`;

  try {
    const payload = {
      name: fullName,
      email,
      phone,
      shopName: input.shop_name?.trim() || undefined,
      type: input.inquiry_type || 'demo',
      subject: input.subject?.trim() || `Inquiry from ${fullName}`,
      message,
      source: 'website',
    };

    const res = await fetch(`${API_BASE_URL.replace(/\/$/, '')}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      const inq = data.data || data;
      return {
        reference_id: inq.id ? `INQ-${inq.id.slice(0, 8).toUpperCase()}` : fallbackRefId,
        full_name: inq.name || fullName,
        shop_name: inq.shopName || input.shop_name,
        email: inq.email || email,
        phone: inq.phone || phone,
      };
    }
  } catch (err) {
    console.warn('Backend inquiry submission fallback:', err);
  }

  // Graceful fallback response
  return {
    reference_id: fallbackRefId,
    full_name: fullName,
    shop_name: input.shop_name,
    email,
    phone,
  };
}

// Compatibility helper
export function createEnquiry(input: CreateEnquiryInput): EnquiryResult {
  // Trigger async submission in background
  submitEnquiry(input).catch(() => {});

  const randomSeq = Math.floor(1000 + Math.random() * 9000);
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  return {
    reference_id: input.reference_id || `INQ-${dateStr}-${randomSeq}`,
    full_name: input.full_name,
    shop_name: input.shop_name,
    email: input.email,
    phone: input.phone,
  };
}
