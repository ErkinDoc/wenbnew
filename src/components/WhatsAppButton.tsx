import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function WhatsAppButton() {
  const { t } = useTranslation();

  const phoneNumber = '421940270511'; // +421 940 270 511
  const message = encodeURIComponent(
    t('whatsapp.defaultMessage', { 
      defaultValue: 'Hello Dr. Erkin, I would like to inquire about a consultation.' 
    })
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label={t('whatsapp.ariaLabel', { defaultValue: 'Contact Dr. Erkin via WhatsApp' })}
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
    </a>
  );
}
