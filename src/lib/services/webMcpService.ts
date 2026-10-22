/**
 * Web Model Context Protocol (WebMCP) Registration Service
 * Exposes declarative, structured tools to browser-native AI agents and passes
 * Google Lighthouse's Agentic Browsing audits.
 */

export function registerWebMcpTools(): void {
  if (typeof window === "undefined") return;

  const nav = navigator as unknown as {
    modelContext?: {
      registerTool?: (tool: {
        name: string;
        description: string;
        inputSchema?: object;
        execute?: (args: unknown) => Promise<unknown> | unknown;
      }) => void;
    };
  };

  if (nav.modelContext?.registerTool) {
    try {
      nav.modelContext.registerTool({
        name: "query_pos_features",
        description:
          "Query StockForge offline desktop POS capabilities, including multi-unit stock, sequential billing, and customer Khata ledgers.",
        inputSchema: {
          type: "object",
          properties: {
            topic: {
              type: "string",
              description: "The topic or feature to look up (e.g., 'offline', 'billing', 'printers')",
            },
          },
        },
        execute: async (args: unknown) => {
          return {
            status: "success",
            data: {
              name: "StockForge Desktop POS",
              architecture: "100% Offline SQLite ACID",
              features: [
                "Multi-Unit Inventory (kg, litre, pcs, box)",
                "Sequential Bill Invoicing (BILL-YYYYMMDD-XXXX)",
                "Customer & Vendor Dues Tracking (Previous + Current = Total Due)",
                "Individual Party Ledgers with Printable Account Statements (A4/Thermal)",
                "1-Click Balance Settlement (Cash, eSewa, Khalti, Bank) with Payment Receipts",
                "80mm & 58mm Thermal Printing",
                "Google Sheets & SQL File Backup",
              ],
            },
          };
        },
      });

      nav.modelContext.registerTool({
        name: "get_system_requirements",
        description:
          "Retrieve hardware and operating system requirements for running StockForge Desktop POS in retail stores.",
        inputSchema: {
          type: "object",
          properties: {},
        },
        execute: async () => {
          return {
            status: "success",
            requirements: {
              os: "Windows 10/11, macOS 11+, Linux (Ubuntu, Debian, Fedora)",
              ram: "Minimum 2 GB RAM (4 GB recommended)",
              storage: "150 MB disk space",
              network: "None required (100% offline-first)",
              hardware: "Supports standard USB barcode scanners, 80mm/58mm thermal printers, cash drawers",
            },
          };
        },
      });

      nav.modelContext.registerTool({
        name: "request_store_demo",
        description:
          "Get contact information and instructions to schedule a live, on-site demonstration in Nepal.",
        inputSchema: {
          type: "object",
          properties: {},
        },
        execute: async () => {
          return {
            status: "success",
            contact: {
              phone: "+977-9800000000",
              location: "Kathmandu Valley, Nepal",
              url: "https://stockforge.app/contact",
            },
          };
        },
      });
    } catch {
      // Gracefully handle any browser permission or registration issues
    }
  }
}

