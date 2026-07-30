import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-luxury-cream via-luxury-peach/20 to-luxury-teal/10 pt-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-luxury-peach/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-teal/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-luxury-gold/20 text-luxury-brown-light rounded-full text-sm font-medium tracking-wide">
                LUXURY PMU STUDIO
              </span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-luxury-brown mb-6 leading-tight">
              Bianca Hench
              <span className="block text-luxury-teal mt-2">Cosmetic Studio</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-luxury-brown-light mb-8 leading-relaxed max-w-xl">
              Experience the art of luxury permanent makeup and beauty enhancement. 
              Where elegance meets expertise in an exclusive, warm environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-luxury-teal hover:bg-luxury-teal-dark text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Consultation
              </a>
              
              <a
                href="https://instagram.com/BiancaHenchPMU"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-luxury-brown hover:bg-luxury-brown hover:text-white text-luxury-brown font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @BiancaHenchPMU
              </a>
            </div>
          </div>

          {/* Right column - Avatar/Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-teal to-luxury-peach rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Avatar Image */}
              <div className="relative z-10 w-full h-full rounded-full flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden bg-white">
                <Image
                  src="/images/avatar.png"
                  alt="Bianca Hench - Master PMU Artist"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-luxury-gold/40 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-luxury-teal/40 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
