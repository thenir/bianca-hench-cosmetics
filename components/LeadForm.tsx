'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // TODO: Replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '' });
      
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-xl mx-auto">
      <h3 className="font-serif text-3xl md:text-4xl text-luxury-brown mb-3 text-center">
        Begin Your Beauty Journey
      </h3>
      <p className="text-luxury-brown-light text-center mb-8">
        Discover exclusive treatments tailored just for you
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-luxury-brown mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-luxury-peach rounded-lg focus:ring-2 focus:ring-luxury-teal focus:border-transparent transition-all outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-luxury-brown mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-luxury-peach rounded-lg focus:ring-2 focus:ring-luxury-teal focus:border-transparent transition-all outline-none"
            placeholder="your@email.com"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-luxury-teal hover:bg-luxury-teal-dark text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {status === 'submitting' ? 'Submitting...' : 'Get Started'}
        </button>

        {status === 'success' && (
          <div className="text-center text-luxury-teal font-medium">
            Thank you! We'll be in touch soon.
          </div>
        )}

        {status === 'error' && (
          <div className="text-center text-red-600 font-medium">
            Something went wrong. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}
