
import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import PokemonGrid from "@/pokemons/components/PokemonGrid";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const response: PokemonsResponse = await data.json();

    const pokemons = response.results.map((pokemon) => {
        return {
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name,
        }
    });

    // throw new Error('Error al obtener los pokemons');

    // throw notFound();
    return pokemons;
}


export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2">Listado de pokemons <small className="text-blue-500">estatico</small></span>

        <PokemonGrid pokemons={pokemons} />
    </div>
  );
}