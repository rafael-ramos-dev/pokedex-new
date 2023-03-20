export {};

declare global{

    module '*.png'

    type PokemonType = {
        type: {
            name: string;
        }
    }
    
    type Pokemon = {
        name: string,
        url: string,
        id: number,
        types: PokemonType[]
    }
}