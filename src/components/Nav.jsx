import React from 'react';
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";


export default function Nav(props) {
 
    return (
        <nav className='nav'>
          <a href="/" className='site-title'>Rick and Morty</a>
          <div className='divandul'>
            <SearchBar
                onSearch = {props.onSearch} 
            />
            <ul>
              <li>
                <Link to='/home'>Home</Link>
              </li>
              <li>
                <Link to='/favorites'>Mis Favoritos</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/'>Close App</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
 }



