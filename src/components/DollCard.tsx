import React from 'react';
import { Heart } from 'lucide-react';
import { Doll } from '../types';

interface DollCardProps {
  doll: Doll;
  onClick: (doll: Doll) => void;
}

export const DollCard: React.FC<DollCardProps> = ({ doll, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={() => onClick(doll)}
    >
      <div className="relative">
        <img 
          src={doll.images[0]} 
          alt={doll.name}
          className="w-full h-64 object-cover"
        />
        {doll.featured && (
          <div className="absolute top-2 right-2">
            <Heart className="text-pink-500 fill-pink-500" size={24} />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{doll.name}</h3>
        <p className="text-gray-600 mt-1 line-clamp-2">{doll.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-pink-600">
            R$ {doll.price.toLocaleString('pt-BR')}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm ${
            doll.available 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {doll.available ? 'Disponível' : 'Indisponível'}
          </span>
        </div>
      </div>
    </div>
  );
};