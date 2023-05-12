import {ContenedorFather} from './components/Cards/CardsComponents'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Routes,Route,useLocation,useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

const email = 'fernando@gmail.com';
const password = '123asd';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters,setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) => {
      if (userData.email === email && userData.password === password) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(()=>{
      !access && navigate('/');
   },[access]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
      
   }
   const onClose = (id) =>{
      const charactersFiltered = characters.filter(character => character.id !== parseInt(id))
      setCharacters(charactersFiltered);
   }

   
   return (
      <div>
         {
            location.pathname !== '/' && <Nav onSearch = {onSearch} access={access} setAccess={setAccess} />
         }
            <ContenedorFather >
               <Routes>
                  <Route path='/' element={<Form login={login}/>} />
                  <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
                  <Route path='/about' element= {<About/>} />
                  <Route path='/detail/:id' element={<Detail/>}  />
                  <Route path='/favorites' element={<Favorites/>}/>
               </Routes>
            </ContenedorFather>
      </div>
   );
}

export default App;
