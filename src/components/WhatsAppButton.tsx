import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { whatsappUrl } from '@/lib/contact';

export function WhatsAppButton() {
  const { t } = useTranslation();

  const href = whatsappUrl(
    t('whatsapp.defaultMessage', {
      defaultValue: 'Hello Dr. Erkin, I would like to ask about a consultation.'
    })
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label={t('whatsapp.ariaLabel', { defaultValue: 'Contact Dr. Erkin via WhatsApp' })}
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping [animation-iteration-count:3]" />
    </a>
  );
}
