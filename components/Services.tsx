export default function Services() {
  const services = [
    {
      icon: '✨',
      title: 'Nano Brow',
      description: 'Ultra-fine, natural hair strokes for perfectly defined eyebrows that enhance your natural beauty.',
    },
    {
      icon: '👁️',
      title: 'Eyeliner Enhancement',
      description: 'Subtle definition that enhances your eyes while maintaining a natural, elegant appearance.',
    },
    {
      icon: '💋',
      title: 'Lip Blushing',
      description: 'Fuller, more defined lips with a natural tint that complements your unique beauty.',
    },
    {
      icon: '🎨',
      title: 'Color Correction',
      description: 'Expert correction of previous PMU work, restoring natural beauty and confidence.',
    },
    {
      icon: '💎',
      title: 'Luxury Accessories',
      description: 'Curated selection of high-end beauty accessories and aftercare products.',
    },
    {
      icon: '🌟',
      title: 'VIP Consultation',
      description: 'Personalized consultation to design your perfect look in our exclusive studio environment.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-luxury-brown mb-4">
            Exclusive Services
          </h2>
          <p className="text-lg text-luxury-brown-light max-w-2xl mx-auto">
            Experience luxury permanent makeup and beauty services designed to enhance your natural elegance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-luxury-cream p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-luxury-teal"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl text-luxury-brown mb-3">
                {service.title}
              </h3>
              <p className="text-luxury-brown-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
