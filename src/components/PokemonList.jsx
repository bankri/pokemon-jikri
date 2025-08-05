import React, { useEffect, useState } from "react";
import PokemonItem from "./PokemonItem";
import pokemonData from "../data/pokemon.json";
import colours from "../data/colours";
import "./PokemonList.css";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setPokemons(pokemonData);
  }, []);

  const allTypes = Array.from(
    new Set(pokemonData.flatMap(p => p.type))
  ).sort();

  // Filter + Search logic
  const filtered = pokemons
    .filter(p =>
      filterType === "All" ? true : p.type.includes(filterType)
    )
    .filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="pokemon-list-container">
      <h1>🌌 Pokémon Galaxy</h1>

      <input
        className="search-bar"
        type="text"
        placeholder="🔍 Cari Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="filter-container">
        <button
          className={`filter-btn ${filterType === "All" ? "active" : ""}`}
          onClick={() => setFilterType("All")}
        >
          All
        </button>
        {allTypes.map(type => (
          <button
            key={type}
            className={`filter-btn ${filterType === type ? "active" : ""}`}
            onClick={() => setFilterType(type)}
            style={{ backgroundColor: colours[type], color: "#fff" }}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="pokemon-grid">
        {filtered.length > 0 ? (
          filtered.map(pokemon => (
            <PokemonItem key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p className="not-found">Tidak ditemukan Pokémon dengan nama itu.</p>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
