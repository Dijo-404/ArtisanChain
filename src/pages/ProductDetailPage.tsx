import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Shield, 
  Star, 
  MapPin, 
  Award, 
  ShoppingCart,
  Heart,
  Share2,
  MessageCircle
} from 'lucide-react';
import { mockProducts, mockArtisans } from '../data/mockData';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const product = mockProducts.find(p => p.id === productId);
  const artisan = mockArtisans.find(a => a.id === product?.artisanId);

  if (!product || !artisan) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/marketplace')}
            className="text-purple-600 hover:text-purple-800"
          >
            Return to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const images = [product.image, product.image, product.image]; // Mock multiple images

  const handleVerifyAuthenticity = () => {
    alert('Blockchain verification successful! This product is authentic and verified on the blockchain. (Demo)');
  };

  const handleBuyNow = () => {
    alert('Redirecting to secure checkout... (This is a demo)');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/marketplace')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Marketplace</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <div className="aspect-w-1 aspect-h-1 mb-4">
              <img
                src={images[selectedImageIndex]}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            
            <div className="flex space-x-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-1 aspect-w-1 aspect-h-1 ${
                    selectedImageIndex === index ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="h-6 w-6" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Share2 className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-purple-600">${product.price}</span>
              {product.verified && (
                <button
                  onClick={handleVerifyAuthenticity}
                  className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
                >
                  <Shield className="h-4 w-4" />
                  <span>Blockchain Verified</span>
                </button>
              )}
            </div>

            <p className="text-gray-600 text-lg mb-6">{product.description}</p>

            {/* Artisan Info */}
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">About the Artisan</h3>
              <div className="flex items-center space-x-4">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">{artisan.name}</span>
                    {artisan.verified && <Award className="h-4 w-4 text-purple-600" />}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {artisan.location}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 mr-1 text-yellow-400 fill-current" />
                      {artisan.rating}
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Contact</span>
                </button>
              </div>
              <p className="text-gray-600 text-sm mt-3">{artisan.story}</p>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button
                onClick={handleBuyNow}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Buy Now</span>
              </button>
              
              <button
                onClick={handleVerifyAuthenticity}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Shield className="h-5 w-5" />
                <span>Verify Authenticity</span>
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Product Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Category:</span>
                  <span className="text-gray-900 capitalize">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Artisan:</span>
                  <span className="text-gray-900">{artisan.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Location:</span>
                  <span className="text-gray-900">{artisan.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Verification:</span>
                  <span className="text-green-600">Blockchain Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Reviews</h3>
          
          {product.reviews.length > 0 ? (
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-medium text-sm">
                        {review.customerName.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{review.customerName}</h4>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-2">
                <Star className="h-12 w-12 mx-auto" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h4>
              <p className="text-gray-500">Be the first to review this product</p>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-4">Write a Review</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Rating:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} className="text-gray-300 hover:text-yellow-400 transition-colors">
                    <Star className="h-5 w-5" />
                  </button>
                ))}
              </div>
              <textarea
                rows={4}
                placeholder="Share your experience with this product..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;