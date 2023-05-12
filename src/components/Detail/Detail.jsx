import axios from 'axios';
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';



const Detail= () => {

    const {id} = useParams();
    const [character,setCharacter] = useState({});


    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(
        <div>
            <h1>Name: {character.name}</h1>
            <p>Estatus: {character.status}</p>
            <p>Especie: {character.species}</p>
            <p>Genero: {character.gender}</p>
            {/* <p>Origin: {character.origin.name}</p> */}
            <img src={character.image} alt="" />
        </div>
    )
}

export default Detail;