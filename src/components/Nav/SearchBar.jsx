import { Container,Input,Boton } from "./SearchBarComponents";
import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id,setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
      
   }

   return (
      <Container>
         <Input type='search' onChange={handleChange} value = {id} />
         <Boton onClick={() => {onSearch(id);setId('')}}>Agregar</Boton>
      </Container>
   );
}