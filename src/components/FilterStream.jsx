import React from 'react';
import './FilterStream.css'; // Criaremos este arquivo de estilos em seguida

const FilterStream = ({ categories, activeFilter, onSelectFilter }) => {
  return (
    <div className="filter-stream">
      {/* Botão "Todos" para ver todas as notificações */}
      <button
        className={`filter-button ${activeFilter === 'Todos' ? 'active' : ''}`}
        onClick={() => onSelectFilter('Todos')}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-button ${activeFilter === category ? 'active' : ''}`}
          onClick={() => onSelectFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterStream;