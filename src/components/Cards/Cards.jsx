import { Contenedor } from './CardsComponents'
import Card from '../Card/Card'

export default function Cards({characters,onClose}) {
   return (
      <Contenedor>
         {
            characters.map((({id,name,species,gender,origin,image},index)=>{
               return (
                  
                     <Card
                        key={index}
                        id = {id}
                        name={name}
                        species={species }
                        gender = {gender}
                        origin={origin}
                        image= {image}
                        onClose={onClose}
                     />
                  
               )
            }))
         }
      </Contenedor>
   )
}
