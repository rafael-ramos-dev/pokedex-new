import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { Card } from '../../components/Card';
import { FadeAnimation } from '../../components/FadeAnimation';

import { getAllPokemon } from '../../controllers/pokemon';
import * as S from './style';


export function Home() {    

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);


    useEffect(() => {  

            getAllPokemon().then(setPokemons).catch((error)=> console.log(error));

            // console.log(pokemons);
            // console.log(pokemons.map(item => item.types));
        
    }, [])
    
    return <S.Container>
        {/* {pokemons.map(item => <Text>{item.name}</Text>)} */}
        {/* {pokemons.map(pokemon => <Card data={pokemon} /> )} */}
        <FlatList
            data={pokemons}
            keyExtractor={pokemon => pokemon.id.toString()}
            renderItem={({item: pokemon}) => (
                <FadeAnimation>
                    <Card data={pokemon}/>
                </FadeAnimation>
            )}
        />
    </S.Container>
} 