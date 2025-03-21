import React, { useState, useEffect } from 'react';
import { Baby } from 'lucide-react';

const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1602734846297-9299fc2d4703?auto=format&fit=crop&q=80',
    title: 'Bonecas Reborn Artesanais'
  },
  {
    url: 'https://images.unsplash.com/photo-1602734846318-e434fe74759f?auto=format&fit=crop&q=80',
    title: 'Feitas com Amor'
  },
  {
    url: 'https://images.unsplash.com/photo-1602734846251-7de79e2b5137?auto=format&fit=crop&q=80',
    title: 'Cada Detalhe Importa'
  }
];

export const Header: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % carouselImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative">
      <div className="absolute inset-0">
        <div className="relative h-[400px] overflow-hidden">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-4 mb-8">
          <Baby className="text-white" size={48} />
          <h1 className="text-4xl font-bold text-white">Reborn Dolls</h1>
        </div>
        <h2 className="text-5xl font-bold text-white mb-4">
          {carouselImages[currentImage].title}
        </h2>
        <p className="text-xl text-white opacity-90 max-w-2xl">
          Descubra nossa coleção exclusiva de bonecas Reborn, cada uma feita à mão com atenção meticulosa aos detalhes.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage ? 'bg-white w-8' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </header>
  );
};