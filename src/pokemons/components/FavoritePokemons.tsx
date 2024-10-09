'use client';
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '@/store';
import PokemonGrid from './PokemonGrid';
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritePokemons = () => {

    const pokemons = useAppSelector((state) => state.pokemons.favorites);
    // const [favoritePokemons, setFavoritePokemons] = useState(pokemons);

    // useEffect(() => {
    //     setFavoritePokemons(pokemons);
    // }, [favoritePokemons]);
  return (
    <>
        {
            Object.keys(pokemons).length === 0
            ? (<NoFavorites />)
            : (<PokemonGrid pokemons={Object.values(pokemons)} />)
        }
    </>
  )
}

export const NoFavorites = () => {
    return(
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No hay favoritos</span>
        </div>
    )
}