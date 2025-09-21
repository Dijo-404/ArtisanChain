import React from 'react';
import { Shield, User } from 'lucide-react';
import { Product } from '../data/mockData';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-w-16 aspect-h-12">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <User className="h-4 w-4 mr-1" />
          <span>{product.artisanName}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          {product.verified && (
            <button className="flex items-center space-x-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium hover:bg-green-200 transition-colors">
              <Shield className="h-3 w-3" />
              <span>Verified</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;