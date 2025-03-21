import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Doll } from '../types';

interface DollModalProps {
  doll: Doll;
  onClose: () => void;
  onOrder: (doll: Doll) => void;
}

export const DollModal: React.FC<DollModalProps> = ({ doll, onClose, onOrder }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % doll.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + doll.images.length) % doll.images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">{doll.name}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="relative">
          <img
            src={doll.images[currentImageIndex]}
            alt={`${doll.name} - Imagem ${currentImageIndex + 1}`}
            className="w-full h-[400px] object-cover"
          />
          
          {doll.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-4">{doll.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <span className="text-gray-500 block">Cor do Cabelo</span>
              <span className="font-medium">{doll.hairColor}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Cor dos Olhos</span>
              <span className="font-medium">{doll.eyeColor}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Tom de Pele</span>
              <span className="font-medium">{doll.skinTone}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Altura</span>
              <span className="font-medium">{doll.height}cm</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-pink-600">
              R$ {doll.price.toLocaleString('pt-BR')}
            </span>
            <button
              onClick={() => onOrder(doll)}
              className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              {doll.available ? 'Comprar Agora' : 'Encomendar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};