import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from 'axios';

const Pokemones = () => {
    const [pokemones, setPokemones] = useState([]);
    const navigate = useNavigate() 
    
    const getPokemones = async () => {
        const {data} = await axios('https://pokeapi.co/api/v2/pokemon')
        setPokemones(data.results);
        console.log(data);
    };

useEffect(() => {
    getPokemones();
    }, []);

    const click = (name) => {
        navigate(`/pokemones/${name}`)
    }

    const onChange = (e) => {
        console.log(e);
    }

    return  <div style={{marginTop:'100px'}}> 
        <h3> Pokemones: </h3>
        <hr/>
        {pokemones.map((pokemon) => (
        <div key={pokemon.name} onClick={() => click(pokemon.name)} style={{cursor: 'pointer'}}>
            {pokemon.name}
        </div>))
        }
        </div>
};

export default Pokemones;