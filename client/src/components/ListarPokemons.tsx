import React, { useEffect, useState } from "react";
import ListarPokemonsItem from "./ListarPokemonsItem";
import { Pokemon } from "../types/pokemon.types";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "./ListarPokemons.queries";

/**
 * Veja uma lista de pokémons
 *
 * Ex:
 * <pre>
 *     <ListarPokemons />
 *
 * </pre>
 *
 * @author Digital House
 */
const ListarPokemons = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <div>Carregando pokémons...</div>;
  if (!data?.pokemons) return <></>;
  return (
    <div className="listar">
      {data.pokemons &&
        data.pokemons.map((pokemon: Pokemon) => (
          <ListarPokemonsItem pokemon={pokemon} key={pokemon.name} />
        ))}
    </div>
  );
};

export default ListarPokemons;
