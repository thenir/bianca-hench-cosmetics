import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Luxury Products | Bianca Hench Cosmetic Studio',
  description: 'Shop our exclusive collection of luxury cosmetics and beauty accessories',
};

const products = [
  {
    id: 1,
    name: 'Luxury Brow Serum',
    category: 'Brow Care',
    price: 89.00,
    description: 'Premium nourishing serum for fuller, healthier brows',
    image: '/images/product-1.jpg',
  },
  {
    id: 2,
    name: 'PMU Aftercare Kit',
    category: 'Aftercare',
    price: 65.00,
    description: 'Complete healing and care kit for post-procedure maintenance',
    image: '/images/product-2.jpg',
  },
  {
    id: 3,
    name: 'Lash & Brow Enhancer',
    category: 'Enhancement',
    price: 125.00,
    description: 'Dual-action formula for dramatic lash and brow growth',
    image: '/images/product-3.jpg',
  },
  {
    id: 4,
    name: 'Luxury Lip Treatment',
    category: 'Lip Care',
    price: 78.00,
    description: 'Hydrating treatment for soft, plump, beautiful lips',
    image: '/images/product-4.jpg',
  },
  {
    id: 5,
    name: 'Micro-needling Serum',
    category: 'Skin Care',
    price: 145.00,
    description: 'Advanced collagen-boosting serum for radiant skin',
    image: '/images/product-5.jpg',
  },
  {
    id: 6,
    name: 'Gold Beauty Tools Set',
    category: 'Accessories',
    price: 195.00,
    description: 'Premium gold-plated beauty tools collection',
    image: '/images/product-6.jpg',
  },
  {
    id: 7,
    name: 'Vitamin C Eye Serum',
    category: 'Skin Care',
    price: 98.00,
    description: 'Brightening serum to reduce dark circles and puffiness',
    image: '/images/product-7.jpg',
  },
  {
    id: 8,
    name: 'Luxury Gift Set',
    category: 'Gift Sets',
    price: 275.00,
    description: 'Complete luxury beauty collection in elegant packaging',
    image: '/images/product-8.jpg',
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-luxury-cream via-luxury-peach/20 to-luxury-teal/10 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl text-luxury-brown mb-6">
              Luxury Products
            </h1>
            <p className="text-lg md:text-xl text-luxury-brown-light max-w-3xl mx-auto">
              Curated collection of premium cosmetics and beauty accessories. 
              Each product is carefully selected to enhance and maintain your natural beauty.
            </p>
          </div>
        </section>

        {/* Avatar/Testimonial Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-luxury-teal shadow-xl flex-shrink-0 bg-gradient-to-br from-luxury-peach via-luxury-cream to-luxury-teal flex items-center justify-center">
              <div className="text-center">
                <div className="font-serif text-5xl text-luxury-brown">BH</div>
              </div>
            </div>
            <div>
              <p className="text-lg text-luxury-brown-light italic mb-4">
                "Quality products are essential for maintaining the beautiful results of permanent makeup. 
                I personally use and recommend every product in this collection."
              </p>
              <p className="font-serif text-xl text-luxury-brown">
                — Bianca Hench, Master PMU Artist
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-luxury-cream">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  {/* Product Image */}
                  <div className="relative h-64 bg-luxury-peach/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-5xl mb-2">✨</div>
                        <p className="text-luxury-brown-light text-sm">
                          Product Image
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-luxury-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
                      New
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <p className="text-xs text-luxury-teal font-semibold uppercase tracking-wide mb-2">
                      {product.category}
                    </p>
                    <h3 className="font-serif text-xl text-luxury-brown mb-2 group-hover:text-luxury-teal transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-luxury-brown-light text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-serif text-2xl text-luxury-brown">
                        ${product.price.toFixed(2)}
                      </p>
                      <button className="bg-luxury-teal hover:bg-luxury-teal-dark text-white px-6 py-2 rounded-full transition-all duration-300 font-semibold text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-luxury-brown text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Need Product Recommendations?
            </h2>
            <p className="text-lg mb-8 text-luxury-peach-dark">
              Book a consultation to get personalized product recommendations for your unique beauty needs.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-luxury-teal hover:bg-luxury-teal-dark text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold"
            >
              Schedule Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
