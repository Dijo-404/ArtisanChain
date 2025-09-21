import React from 'react';
import { Star, MapPin, Award } from 'lucide-react';
import { Artisan } from '../data/mockData';

interface ArtisanCardProps {
  artisan: Artisan;
}

const ArtisanCard: React.FC<ArtisanCardProps> = ({ artisan }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={artisan.image}
          alt={artisan.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{artisan.name}</h3>
          {artisan.verified && (
            <Award className="h-5 w-5 text-purple-600" />
          )}
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{artisan.location}</span>
        </div>
        
        <p className="text-sm text-purple-600 font-medium mb-3">{artisan.speciality}</p>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {artisan.story}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-900">{artisan.rating}</span>
          </div>
          <span className="text-sm font-medium text-purple-600">
            {artisan.credits} credits
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArtisanCard;