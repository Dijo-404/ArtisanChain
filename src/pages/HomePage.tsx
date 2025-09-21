import React from 'react';
import { ArrowRight, Shield, Brain, Users, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArtisanCard from '../components/ArtisanCard';
import ProductCard from '../components/ProductCard';
import { mockArtisans, mockProducts } from '../data/mockData';

const HomePage = () => {
  const featuredArtisans = mockArtisans.slice(0, 3);
  const trendingProducts = mockProducts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Local Artisans with
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block mt-2">
                AI & Blockchain
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Discover authentic handcrafted products, verify their authenticity with blockchain, 
              and support local artisans worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/marketplace"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Explore as Customer</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/dashboard"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Sign up as Artisan</span>
                <Users className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose ArtisanChain?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with traditional craftsmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Blockchain Authenticity</h3>
              <p className="text-gray-600">Every product is verified and tracked on the blockchain, ensuring authenticity and provenance.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Discovery</h3>
              <p className="text-gray-600">Our AI helps match customers with perfect artisan products based on their preferences.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Community</h3>
              <p className="text-gray-600">Connect artisans worldwide and support local craftsmanship through our global platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Artisans</h2>
            <p className="text-xl text-gray-600">Meet the talented creators behind our unique products</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtisans.map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Crafts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Crafts</h2>
              <p className="text-xl text-gray-600">Popular handcrafted items this month</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-600" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/marketplace"
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blockchain Authenticity Badge */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-green-300" />
          <h2 className="text-3xl font-bold mb-4">Blockchain Authenticity Guarantee</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Every product comes with an immutable blockchain certificate of authenticity. 
            Verify the origin, materials, and craftsmanship with just one click.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center space-x-2 mx-auto">
            <Shield className="h-5 w-5" />
            <span>Learn About Verification</span>
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">2,500+</div>
              <div className="text-gray-300">Active Artisans</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">15,000+</div>
              <div className="text-gray-300">Products Sold</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-gray-300">Verified Authentic</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;