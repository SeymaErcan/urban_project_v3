import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import ProfileButtonLoggedOut from './ProfileButtonLoggedOut';
import { SiUtorrent } from "react-icons/si";
import './Navigation.css'

const Navigation = ({ isLoaded }) => {

  const currUser = useSelector((state) => state.session.user);

  const sessionLinks = currUser ? (
    <ul className='navbar-right'>
      <li>
        <NavLink to='/spots/new' id='create-spot-link'>Create a New Spot</NavLink>
      </li>
      <li>
        <ProfileButton user={currUser} />
      </li>
    </ul>
  ) : (
    <>
      <ProfileButtonLoggedOut />
    </>
  );

  return (
    <ul className='navbar'>
      <li className='home-container'>
        <SiUtorrent id='logo' />
        <NavLink to="/" id='home-button'>urban theme scape</NavLink>
      </li>
      {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation
