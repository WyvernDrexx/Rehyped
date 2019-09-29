import React from 'react';
import './styles/SearchBar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faSearch
} from "@fortawesome/free-solid-svg-icons";

const SearchBar = props => {
  return (
    <div className={`search-bar d-flex justify-content-center ${ props.className || '' }`}>
      <span className='search-bar-inner'>
        <FontAwesomeIcon className='search-icon' icon={faSearch} />
        <input placeholder='SEARCH MECH' className='search-input placeholder-center' />
      </span>
    </div>
  );
}

export default SearchBar;