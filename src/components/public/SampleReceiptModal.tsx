/**
 * Sample Thermal Receipt Preview Modal
 * Allows prospective retail clients to test print / inspect a realistic 80mm thermal receipt.
 */
import React from 'react';
import { Modal } from '../common/Modal.tsx';
import { Printer, Check, Receipt, Download } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { formatCurrency } from '../../lib/utils/format.ts';

interface SampleReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  subtotal: number;
  discount: number;
  taxable: number;
  tax: number;
  total: number;
  items: Array<{ name: string; unit: string; price: number; qty: number }>;
}

export const SampleReceiptModal: React.FC<SampleReceiptModalProps> = ({
  isOpen,
  onClose,
  subtotal,
  discount,
  taxable,
  tax,
  total,
  items,
}) => {
  const { isNepali } = useLanguage();
  const currencySymbol = isNepali ? 'रु.' : 'Rs.';
  const todayStr = new Date().toISOString().slice(0, 10);
  const billNumber = `BILL-${todayStr.replace(/-/g, '')}-0042`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isNepali ? 'थर्मल रसिद पूर्वावलोकन' : '80mm Thermal Receipt Preview'}
      subtitle={
        isNepali
          ? '८०mm र ५८mm थर्मल प्रिन्टरका लागि क्यालिब्रेट गरिएको वास्तविक बिल'
          : 'High-speed ESC/POS receipt layout with sequential bill formatting'
      }
      maxWidth="md"
    >
      <div className="space-y-4">
        {/* Simulated Thermal Paper Container */}
        <div className="p-6 bg-white text-neutral-900 rounded-xl font-mono text-xs shadow-inner space-y-3 border border-neutral-300">
          {/* Header */}
          <div className="text-center space-y-0.5 border-b border-dashed border-neutral-400 pb-3">
            <div className="font-extrabold text-sm uppercase tracking-wider">
              SHRESTHA SUPERMART & PROVISIONS
            </div>
            <div className="text-[10px] text-neutral-600">New Road, Ward 22, Kathmandu, Nepal</div>
            <div className="text-[10px] text-neutral-600">Phone: +977 1-4245678 / +977 9801234567</div>
            <div className="text-[10px] font-bold mt-1">PAN/VAT: 601234567</div>
            <div className="text-[10px] font-bold text-neutral-800 mt-1">
              *** TAX INVOICE / क्यास मेमो ***
            </div>
          </div>

          {/* Meta Info */}
          <div className="text-[10px] space-y-0.5 border-b border-dashed border-neutral-400 pb-2">
            <div className="flex justify-between">
              <span>Bill No:</span>
              <span className="font-bold">{billNumber}</span>
            </div>
            <div className="flex justify-between">
              <span>Date & Time:</span>
              <span>{new Date().toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Cashier:</span>
              <span>Counter #1 (Admin)</span>
            </div>
            <div className="flex justify-between">
              <span>Payment Mode:</span>
              <span>CASH / eSewa</span>
            </div>
          </div>

          {/* Item Table */}
          <div className="border-b border-dashed border-neutral-400 pb-2">
            <div className="flex justify-between text-[10px] font-bold border-b border-neutral-300 pb-1 mb-1">
              <span>ITEM [QTY x RATE]</span>
              <span>TOTAL</span>
            </div>
            {items.map((item, idx) => (
              <div key={idx} className="flex justify-between text-[10px] py-0.5">
                <div className="truncate max-w-[180px]">
                  <div>{item.name}</div>
                  <div className="text-neutral-500 text-[9px]">
                    {item.qty} {item.unit} x {currencySymbol} {item.price}
                  </div>
                </div>
                <div className="font-bold">
                  {currencySymbol} {(item.price * item.qty).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Breakdown */}
          <div className="space-y-1 text-[11px] border-b border-dashed border-neutral-400 pb-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>{currencySymbol} {subtotal.toLocaleString()}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-neutral-600">
                <span>Discount:</span>
                <span>- {currencySymbol} {discount.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold">
              <span>Taxable Subtotal:</span>
              <span>{currencySymbol} {taxable.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax / VAT (13%):</span>
              <span>+ {currencySymbol} {tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-extrabold text-sm border-t border-neutral-400 pt-1 mt-1">
              <span>GRAND TOTAL:</span>
              <span>{currencySymbol} {total.toLocaleString()}</span>
            </div>
          </div>

          {/* Footer message */}
          <div className="text-center text-[9px] text-neutral-600 space-y-0.5 pt-1">
            <div>Thank you for shopping with us!</div>
            <div>फेरि भेटौँला · Please visit again!</div>
            <div className="font-bold mt-1 text-neutral-800">
              Powered by StockForge Offline Engine
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-[11px] text-neutral-400 flex items-center gap-1">
            <Receipt className="w-3.5 h-3.5 text-emerald-400" />
            <span>ESC/POS Standard 80mm</span>
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isNepali ? 'प्रिन्ट परीक्षण गर्नुहोस्' : 'Print Test Bill'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              {isNepali ? 'बन्द' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
