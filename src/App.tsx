import React, { useState } from 'react';
import { Doll, FilterOptions } from './types';
import { dolls } from './data/dolls';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DollCard } from './components/DollCard';
import { Filters } from './components/Filters';
import { DollModal } from './components/DollModal';
import { OrderForm } from './components/OrderForm';

function App() {
  const [filters, setFilters] = useState<FilterOptions>({});
  const [selectedDoll, setSelectedDoll] = useState<Doll | null>(null);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const filteredDolls = dolls.filter(doll => {
    if (filters.name && !doll.name.toLowerCase().includes(filters.name.toLowerCase())) {
      return false;
    }
    if (filters.hairColor && doll.hairColor !== filters.hairColor) {
      return false;
    }
    if (filters.eyeColor && doll.eyeColor !== filters.eyeColor) {
      return false;
    }
    if (filters.skinTone && doll.skinTone !== filters.skinTone) {
      return false;
    }
    return true;
  });

  const handleOrder = (formData: any) => {
    console.log('Order placed:', { doll: selectedDoll, ...formData });
    setShowOrderForm(false);
    setSelectedDoll(null);
    alert('Pedido realizado com sucesso! Entraremos em contato em breve.');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <section className="mb-8">
            <Filters filters={filters} onFilterChange={setFilters} />
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDolls.map(doll => (
              <DollCard
                key={doll.id}
                doll={doll}
                onClick={setSelectedDoll}
              />
            ))}
          </section>
        </div>

        {selectedDoll && !showOrderForm && (
          <DollModal
            doll={selectedDoll}
            onClose={() => setSelectedDoll(null)}
            onOrder={() => setShowOrderForm(true)}
          />
        )}

        {selectedDoll && showOrderForm && (
          <OrderForm
            doll={selectedDoll}
            onClose={() => setShowOrderForm(false)}
            onSubmit={handleOrder}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;