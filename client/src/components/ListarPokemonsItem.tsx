import React from "react";
import { Pokemon } from "../types/pokemon.types";

interface ListarPokemonsItemProps {
  pokemon: Pokemon;
}

/**
 * Ver um pokemon com seu nome e url
 *
 * Ex:
 * <pre>
 *     <ListarPokemonsItem pokemon={pokemon}
 *                             selecionarPokemon={(pokemon) => {}}/>
 *
 * </pre>
 *
 * @author Digital House
 * @param pokemon o pokémon para mostrar
 * @param selecionarPokemon uma função que é executada quando você clica no pokemon
 */
const ListarPokemonsItem = ({ pokemon }: ListarPokemonsItemProps) => (
  <div>
    <strong>{pokemon.name}</strong>
    <img
      src={pokemon.image}
      alt={pokemon.name}
      style={{ maxWidth: 200, maxHeight: 200 }}
    />
  </div>
);

export default ListarPokemonsItem;
