import api from '../service/api';

type Request = {
    id: number,
    types: PokemonType[]
}


export async function getAllPokemon(): Promise<Pokemon[]> {
    
    const response = await api.get('pokemon');
    const { results } = response.data;


    const payloadPokemons: Array<Pokemon> = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
            const {id, types} = await getMoreInfo(pokemon.url)

            return {
                name: pokemon.name,
                url: pokemon.url,
                id,
                types,
            };
        })
    );

    return payloadPokemons;
}


async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);
    const {id, types} = response.data;

    return {
        id, types
    };
}