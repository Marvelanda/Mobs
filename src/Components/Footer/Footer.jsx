import style from './style.module.css';
import React from 'react';
import CheckUserPlace from '../CheckUserPlace/CheckUserPlace';

function Footer() {

  

  return (
    <div className={`${style.footer}`}>
      <nav className={`container ${style['footer-container']}`}>
        <ul className={`${style['navigation-list']}`}>
          
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
