export {};

declare global{

    module '*.png'

    type PokemonType = {
        type: {
            name: string,
            url: string,
        }
    }
    
    type Pokemon = {
        name: string,
        url: string,
        id: number,
        types: PokemonType[]
    }

    type pokeTypeName = {
        typeName: string,
    }

    interface pokeTypeNameString {
        [key: number]: string
    }

    // interface pokeTypeNameString extends pokeTypeNameString {
    //     1: "grass",
    //     2: "fire",
    //     3: "water",
    //     4: "poison",
    //     5: "normal",
    //     6: "bug",
    //     7: "flying",
    //     8: "eletric",
    //     9: "ground"
    // }
}