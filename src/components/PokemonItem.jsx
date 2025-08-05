import React from 'react';
import './PokemonItem.css';
import colours from '../data/colours';

const PokemonItem = ({ pokemon }) => {
  const bgColor = colours[pokemon.type[0]] || "#555";

  return (
    <div className="pokemon-card" style={{ backgroundColor: bgColor }}>
      <img src={pokemon.image} alt={pokemon.name} className="pokemon-img" />
      <h3>{pokemon.name}</h3>
      <div className="types">
        {pokemon.type.map((t) => (
          <span key={t} className="type-badge">{t}</span>
        ))}
      </div>

      <div className="description-hover">
        <p>{pokemon.description}</p>
      </div>
    </div>
  );
};

export default PokemonItem;
