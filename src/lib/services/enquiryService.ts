/**
 * Website Customer Inquiries Service
 * Submits inquiries to the StockForge Backend API (POST /api/v1/inquiries).
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
  id?: string;
  created_at?: string;
}

/**
 * Submit an inquiry to backend API
 * POST /api/v1/inquiries
 */
export async function submitEnquiry(
  input: CreateEnquiryInput,
): Promise<EnquiryResult> {
  const fullName = input.full_name?.trim();
  const email = input.email?.trim();
  const phone = input.phone?.trim();
  const message = input.message?.trim();

  if (!fullName || fullName.length < 2) {
    throw new Error("Full name must be at least 2 characters long.");
  }
  if (!email || !email.includes("@")) {
    throw new Error("A valid email address is required.");
  }
  if (!phone) {
    throw new Error("Phone number is required.");
  }
  if (!message || message.length < 10) {
    throw new Error("Message must be at least 10 characters long.");
  }

  const subject =
    input.subject?.trim() ||
    `Inquiry from ${fullName}${input.store_type ? ` (${input.store_type})` : ""}`;

  const payload = {
    name: fullName,
    email,
    phone,
    shopName: input.shop_name?.trim() || undefined,
    storeType: input.store_type?.trim() || undefined,
    type: input.inquiry_type || "demo",
    subject,
    message,
    source: "website",
  };

  const endpoint = `${API_BASE_URL.replace(/\/$/, "")}/inquiries`;

  let response: Response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (err: any) {
    throw new Error(
      "Unable to reach the StockForge server. Please verify your internet connection or that the backend is running.",
    );
  }

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMsg =
      data?.error ||
      data?.message ||
      (data?.details
        ? JSON.stringify(data.details)
        : `Server error (${response.status})`);
    throw new Error(errorMsg);
  }

  const inq = data?.data || data;
  const inqId = inq?.id || "";
  const refId = inqId
    ? `INQ-${inqId.slice(0, 8).toUpperCase()}`
    : `INQ-${Date.now().toString().slice(-6)}`;

  return {
    reference_id: refId,
    full_name: inq?.name || fullName,
    shop_name: inq?.shopName || input.shop_name,
    email: inq?.email || email,
    phone: inq?.phone || phone,
    id: inqId,
    created_at: inq?.createdAt,
  };
}

/**
 * Compatibility helper
 */
export function createEnquiry(input: CreateEnquiryInput): EnquiryResult {
  submitEnquiry(input).catch((err) => {
    console.warn("Background inquiry submission failed:", err);
  });

  const randomSeq = Math.floor(1000 + Math.random() * 9000);
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return {
    reference_id: input.reference_id || `INQ-${dateStr}-${randomSeq}`,
    full_name: input.full_name,
    shop_name: input.shop_name,
    email: input.email,
    phone: input.phone,
  };
}
