import Hero from '@/components/Hero';
import Services from '@/components/Services';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-luxury-cream to-luxury-peach/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl text-luxury-brown mb-6">
            The Art of Beauty Enhancement
          </h2>
          <p className="text-lg text-luxury-brown-light leading-relaxed mb-8">
            At Bianca Hench Cosmetic Studio, we believe that true beauty is about enhancing 
            what makes you unique. With years of expertise in luxury permanent makeup and 
            cosmetic services, we create bespoke treatments in an exclusive, warm environment 
            designed for discerning clients who appreciate excellence.
          </p>
          <p className="text-lg text-luxury-brown-light leading-relaxed">
            Every treatment is a masterpiece, combining artistry with the latest techniques 
            to deliver natural, stunning results that stand the test of time.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl text-luxury-brown mb-4">
              Start Your Transformation
            </h2>
            <p className="text-lg text-luxury-brown-light">
              Reserve your exclusive consultation today
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

