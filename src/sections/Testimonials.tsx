import { motion } from 'framer-motion';
import { Star, MapPin, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  location: string;
  condition: string;
  duration: string;
  result: string;
  rating: number;
  quote: string;
  avatar: string;
}

export function Testimonials() {
  const { t } = useTranslation();

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maria K.",
      age: 42,
      location: "Bratislava, Slovakia",
      condition: t('testimonials.1.condition'),
      duration: t('testimonials.1.duration'),
      result: t('testimonials.1.result'),
      rating: 5,
      quote: t('testimonials.1.quote'),
      avatar: "https://ui-avatars.com/api/?name=Maria+K&background=4A5568&color=fff&size=128&bold=true"
    },
    {
      id: 2,
      name: "Andrey M.",
      age: 38,
      location: "Moscow, Russia (Online)",
      condition: t('testimonials.2.condition'),
      duration: t('testimonials.2.duration'),
      result: t('testimonials.2.result'),
      rating: 5,
      quote: t('testimonials.2.quote'),
      avatar: "https://ui-avatars.com/api/?name=Andrey+M&background=1A365D&color=fff&size=128&bold=true"
    },
    {
      id: 3,
      name: "Gulnara A.",
      age: 45,
      location: "Almaty, Kazakhstan (Online)",
      condition: t('testimonials.3.condition'),
      duration: t('testimonials.3.duration'),
      result: t('testimonials.3.result'),
      rating: 5,
      quote: t('testimonials.3.quote'),
      avatar: "https://ui-avatars.com/api/?name=Gulnara+A&background=68A07C&color=fff&size=128&bold=true"
    },
    {
      id: 4,
      name: "Pavel S.",
      age: 51,
      location: "Prague, Czech Republic",
      condition: t('testimonials.4.condition'),
      duration: t('testimonials.4.duration'),
      result: t('testimonials.4.result'),
      rating: 5,
      quote: t('testimonials.4.quote'),
      avatar: "https://ui-avatars.com/api/?name=Pavel+S&background=2D3748&color=fff&size=128&bold=true"
    },
    {
      id: 5,
      name: "Jennifer L.",
      age: 39,
      location: "San Francisco, USA (Online)",
      condition: t('testimonials.5.condition'),
      duration: t('testimonials.5.duration'),
      result: t('testimonials.5.result'),
      rating: 5,
      quote: t('testimonials.5.quote'),
      avatar: "https://ui-avatars.com/api/?name=Jennifer+L&background=C9A227&color=fff&size=128&bold=true"
    },
    {
      id: 6,
      name: "David M.",
      age: 47,
      location: "London, UK (Online)",
      condition: t('testimonials.6.condition'),
      duration: t('testimonials.6.duration'),
      result: t('testimonials.6.result'),
      rating: 5,
      quote: t('testimonials.6.quote'),
      avatar: "https://ui-avatars.com/api/?name=David+M&background=1A365D&color=fff&size=128&bold=true"
    },
    {
      id: 7,
      name: "Anna van D.",
      age: 35,
      location: "Amsterdam, Netherlands",
      condition: t('testimonials.7.condition'),
      duration: t('testimonials.7.duration'),
      result: t('testimonials.7.result'),
      rating: 5,
      quote: t('testimonials.7.quote'),
      avatar: "https://ui-avatars.com/api/?name=Anna+vanD&background=68A07C&color=fff&size=128&bold=true"
    },
    {
      id: 8,
      name: "Carlos R.",
      age: 44,
      location: "Barcelona, Spain (Online)",
      condition: t('testimonials.8.condition'),
      duration: t('testimonials.8.duration'),
      result: t('testimonials.8.result'),
      rating: 5,
      quote: t('testimonials.8.quote'),
      avatar: "https://ui-avatars.com/api/?name=Carlos+R&background=2D3748&color=fff&size=128&bold=true"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? 'fill-[#C9A227] text-[#C9A227]'
                : 'fill-none text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#F7F9FC] to-white">
      <div className="section-container">
        <div className="section-inner">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-serif font-bold text-[#1A365D] mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-[16px] lg:text-[18px] text-[#4A5568] max-w-3xl mx-auto font-sans">
              {t('testimonials.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-3 border-[#68A07C]"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-sans font-bold text-[#1A365D] text-[16px]">
                        {testimonial.name}
                      </h3>
                      <span className="text-[14px] text-[#4A5568]">
                        {testimonial.age}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#718096] mb-2">
                      {testimonial.location}
                    </p>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-[#68A07C]/10 text-[#68A07C] text-[12px] font-sans font-semibold rounded-full">
                    {testimonial.condition}
                  </span>
                </div>

                <div className="flex flex-col gap-2 mb-4 text-[13px] text-[#4A5568] font-sans">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#68A07C]" />
                    <span>{testimonial.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#68A07C]" />
                    <span className="font-semibold text-[#1A365D]">
                      {testimonial.result}
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -top-2 -left-1 text-[48px] text-[#68A07C]/20 font-serif leading-none">
                    "
                  </div>
                  <p className="text-[14px] leading-[1.7] text-[#4A5568] font-sans pl-6 pr-2">
                    {testimonial.quote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-[13px] text-[#718096] font-sans max-w-4xl mx-auto">
              {t('testimonials.disclaimer')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
