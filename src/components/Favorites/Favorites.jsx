import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorites = () => {

    const favorites = useSelector(state => state.myFavorites);


    return (
        <>
            {favorites.map(({id,name,species,gender,image,origin})=>{
                return <Card
                key={id}
                id = {id}
                name={name}
                species={species }
                gender = {gender}
                origin={origin}
                image= {image}
             />
            })}
        </>
    )
}

export default Favorites;