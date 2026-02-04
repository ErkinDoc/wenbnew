import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function WhatsAppButton() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const phoneNumber = '421940270511'; // +421 940 270 511 без + и пробелов
  const message = encodeURIComponent(
    t('whatsapp.defaultMessage', { 
      defaultValue: 'Hello Dr. Erkin, I would like to inquire about a consultation.' 
    })
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Tooltip */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 mb-2 w-64 bg-white rounded-lg shadow-xl p-4 border border-gray-200 animate-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm text-gray-700 font-sans mb-3">
            {t('whatsapp.tooltip', { 
              defaultValue: 'Quick consultation via WhatsApp' 
            })}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] text-white text-center py-2 rounded-lg font-sans font-medium text-sm hover:bg-[#20BA5A] transition-colors"
          >
            {t('whatsapp.cta', { defaultValue: 'Start Chat' })}
          </a>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:animate-pulse" />
      </button>

      {/* Pulse Animation Ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-20 animate-ping" />
    </div>
  );
}

