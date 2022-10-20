import React from 'react';
import logo from '../../assets/logo.png';
import logoF from '../../assets/logoF.png';
import {Link} from 'react-router-dom';
// import { ReactComponent as Favorite } from '../../assets/favorites.svg';

function Header() {
  return (
    <div className='container-fluid d-flex justify-content-between'>
        <Link to='/'>
            <img width='100px' src={logo} alt='dictionary'></img>
        </Link>
        <Link to='/favorites'>
            <img width='100px' src={logoF} alt='favorites'/>
        </Link>
    </div>
  )
}

export default Header
