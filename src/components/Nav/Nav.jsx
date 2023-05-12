import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom';


const Nav = ({onSearch,setAccess}) => {

    

    const handleLogOut = () => {
        setAccess(false);
    }

    return(
        <nav>
            <SearchBar onSearch={onSearch} />

            <Link to='/about'>
                <button>About</button>
            </Link>

            <Link to='/home' >
                <button>Home</button>
            </Link>

            <Link to='/favorites' >
                <button>Favorites</button>
            </Link>

            <button onClick={()=>{handleLogOut()}} >Log Out</button>
        </nav>
    )
}

export default Nav;