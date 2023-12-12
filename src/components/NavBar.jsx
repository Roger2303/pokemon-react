import { NavLink } from "react-router-dom";
import './NavBar.css';
const NavBar = () => {
    return <div className='navbar'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png' className='logo'/>
    <div style={{color:'white'}} className= 'links'>
    <NavLink className= {({ isActive}) => isActive ? 'active' : ''}  to='/'> Home </NavLink>
    <NavLink className= {({ isActive}) => isActive ? 'active' : ''} to='/pokemones'> Pokemones</NavLink>
    </div>
    </div>
};

export default NavBar;