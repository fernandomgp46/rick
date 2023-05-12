import { CardBase,Button,Titulo2,Imagen,Contenedor2,TituloNombre } from "./CardComponents";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { addFavorite,removeFavorite } from "../../redux/actions";
import { useState,useEffect } from "react";

function Card({id,onClose,name,species,gender,image,addFavorite,removeFavorite,myFavorites}) {

   const [isFav,setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({id,name,species,gender,image,onClose,addFavorite,removeFavorite});  
      }
   }

   useEffect(()=>{
      myFavorites.forEach((fav)=>{
         if(fav.id === id){
            setIsFav(true)
         }})
   },[myFavorites])

   return (
      <CardBase>
         {
            isFav ? (<button onClick={handleFavorite}>♥♥</button>) : (<button onClick={handleFavorite}>♥</button>)
         }
         <Button onClick={()=>{onClose(id)}}>X</Button>
         <Imagen src={image} alt='' />
         <Link to={`/detail/${id}`} >
            <TituloNombre>{name}</TituloNombre>
         </Link>
         <Contenedor2>
         <Titulo2>{species}</Titulo2>
         <Titulo2>{gender}</Titulo2>
         </Contenedor2>
      </CardBase>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => dispatch(addFavorite(character)),
      removeFavorite: (id) => dispatch(removeFavorite(id)), 
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);