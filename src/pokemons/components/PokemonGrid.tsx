import Image from "next/image"
import { SimplePokemon } from "../interfaces/simple-pokemon"
import PokemonCard from "./PokemonCard"

const PokemonGrid = ({pokemons}: {pokemons: SimplePokemon[]}) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
        {
            pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon}  />
            ))
        }
    </div>
  )
}

export default PokemonGrid
