/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>
        Ceddit is a clone of{' '}
        <a href='#' className='hvr-underline'>
          reddit
        </a>{' '}
        (A constructive and inclusive social network for software developers)
      </p>
      <p>
        Made with {' '}
        <a href='#' className='hvr-underline'>
          React
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
