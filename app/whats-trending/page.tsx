import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: "What's Trending | Bianca Hench Cosmetic Studio",
  description: 'Latest trends in permanent makeup, beauty techniques, and luxury cosmetics',
};

const blogPosts = [
  {
    id: 1,
    title: 'Nano Brow: The Future of Natural Eyebrows',
    category: 'PMU Techniques',
    date: 'July 28, 2026',
    excerpt: 'Discover why nano brow technique is revolutionizing permanent makeup with ultra-fine, natural hair strokes that last.',
    image: '/images/blog-1.jpg',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: '5 Aftercare Secrets for Flawless PMU Results',
    category: 'Beauty Tips',
    date: 'July 25, 2026',
    excerpt: 'Expert tips to ensure your permanent makeup heals perfectly and maintains its stunning appearance for years.',
    image: '/images/blog-2.jpg',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Fall 2026: Luxe Lip Color Trends',
    category: 'Trends',
    date: 'July 22, 2026',
    excerpt: 'This season\'s most coveted lip blushing shades from nude browns to deep berries - what\'s hot in permanent lip color.',
    image: '/images/blog-3.jpg',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Microblading vs. Nano Brows: Which is Right for You?',
    category: 'Education',
    date: 'July 20, 2026',
    excerpt: 'Understanding the differences between these popular brow techniques to help you choose the perfect method.',
    image: '/images/blog-4.jpg',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'The Rise of Minimalist Beauty in Luxury PMU',
    category: 'Trends',
    date: 'July 18, 2026',
    excerpt: 'How the "less is more" philosophy is shaping permanent makeup trends among high-end clientele.',
    image: '/images/blog-5.jpg',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Celebrity PMU Looks That Are Taking Over 2026',
    category: 'Inspiration',
    date: 'July 15, 2026',
    excerpt: 'A-list celebrities are embracing permanent makeup. See the looks that are inspiring clients worldwide.',
    image: '/images/blog-6.jpg',
    readTime: '8 min read',
  },
];

export default function WhatsTrendingPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-luxury-cream via-luxury-peach/20 to-luxury-teal/10 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-luxury-teal/20 rounded-full mb-6">
              <span className="text-luxury-brown font-semibold text-sm tracking-wide">BEAUTY INSIGHTS</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-luxury-brown mb-6">
              What's Trending
            </h1>
            <p className="text-lg md:text-xl text-luxury-brown-light max-w-3xl mx-auto">
              Stay ahead of the curve with the latest trends, techniques, and insights 
              from the world of luxury permanent makeup and beauty.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-luxury-cream rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-auto bg-gradient-to-br from-luxury-peach to-luxury-teal flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl mb-4">💎</div>
                  <p className="text-luxury-brown font-serif text-2xl">Featured Trend</p>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-luxury-teal font-semibold text-sm uppercase tracking-wide mb-3">
                  {blogPosts[0].category}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-luxury-brown mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-luxury-brown-light mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-luxury-brown-light mb-6">
                  <span>{blogPosts[0].date}</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <button className="bg-luxury-teal hover:bg-luxury-teal-dark text-white px-8 py-3 rounded-full transition-all duration-300 font-semibold w-fit">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-luxury-cream">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-luxury-brown mb-12 text-center">
              Latest Articles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  {/* Post Image */}
                  <div className="relative h-64 bg-gradient-to-br from-luxury-peach via-luxury-gold to-luxury-teal flex items-center justify-center overflow-hidden">
                    <div className="text-center p-6 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="text-6xl mb-2">
                        {post.id === 2 && '✨'}
                        {post.id === 3 && '💋'}
                        {post.id === 4 && '🎨'}
                        {post.id === 5 && '🌟'}
                        {post.id === 6 && '👑'}
                      </div>
                      <p className="text-white font-semibold">Trending Now</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-luxury-teal font-semibold text-xs uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="text-luxury-brown-light text-xs">
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-xl text-luxury-brown mb-3 group-hover:text-luxury-teal transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-luxury-brown-light text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-luxury-brown-light text-xs">
                        {post.date}
                      </span>
                      <button className="text-luxury-teal hover:text-luxury-teal-dark font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 bg-luxury-brown text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Stay Informed
            </h2>
            <p className="text-lg mb-8 text-luxury-peach-dark">
              Subscribe to receive the latest trends, tips, and exclusive offers directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-luxury-brown focus:outline-none focus:ring-2 focus:ring-luxury-teal"
              />
              <button className="bg-luxury-teal hover:bg-luxury-teal-dark text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
