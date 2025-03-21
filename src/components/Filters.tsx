import React from 'react';
import { Search } from 'lucide-react';
import { FilterOptions } from '../types';

interface FiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
  const hairColors = ['Loiro', 'Castanho', 'Preto', 'Ruivo'];
  const eyeColors = ['Azul', 'Verde', 'Castanho', 'Cinza'];
  const skinTones = ['Clara', 'Média', 'Morena'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Buscar por nome..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          value={filters.name || ''}
          onChange={(e) => onFilterChange({ ...filters, name: e.target.value })}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <select
          className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          value={filters.hairColor || ''}
          onChange={(e) => onFilterChange({ ...filters, hairColor: e.target.value })}
        >
          <option value="">Cor do Cabelo</option>
          {hairColors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>

        <select
          className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          value={filters.eyeColor || ''}
          onChange={(e) => onFilterChange({ ...filters, eyeColor: e.target.value })}
        >
          <option value="">Cor dos Olhos</option>
          {eyeColors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>

        <select
          className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          value={filters.skinTone || ''}
          onChange={(e) => onFilterChange({ ...filters, skinTone: e.target.value })}
        >
          <option value="">Tom de Pele</option>
          {skinTones.map(tone => (
            <option key={tone} value={tone}>{tone}</option>
          ))}
        </select>
      </div>
    </div>
  );
};