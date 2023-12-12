import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const PokemonesDetalle = () => {
//1.- usar el hook useParams
const {name} = useParams();
const [pokemon, setPokemon] = useState({});

//2. consumir Api
const getPokemones = async () => {
const {data} = await axios (`https://pokeapi.co/api/v2/pokemon/${name}`)
setPokemon(data);
}

useEffect(() => {
    getPokemones();
    }, []);

    return <div>
    <h3> Nombre: {pokemon.name}</h3>
    <h3> Orden: {pokemon.id}</h3>

    {pokemon.sprites && (
    <img style={{width:'150px', height:'150px'}}  src={pokemon.sprites.front_default} alt={pokemon.name} />)}
    </div>
};

export default PokemonesDetalle;