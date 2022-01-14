import React, {useEffect, useRef} from 'react';
import styled from 'styled-components'

// custom imports
import {links} from '../data/NavbarData';
import {FaLinkedin, FaBars} from 'react-icons/fa';

const Navbar = () => {

    const toggleTheame = () => {
      console.log('toggle theame')
    }
    const toggleLinks = () => {
      console.log('toggleLinks')
    }

    return (
      <NavContainer>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <a href="#" className="nav-logo">Sanuja</a>
            <button className='nav-toggle' onClick={toggleLinks}>
              <FaBars />
            </button>           
          </div>

          <div className='links-container show-container' >
            <ul className='links'>
              {links.map((link) => {
                const { id, url, text, icon } = link;
                return (
                  <li key={id}>
                    <a href={url}>
                      <div className="nav-icon">{icon}</div>
                      <div className="nav-title">{text}</div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      </NavContainer>
    );
}

const NavContainer = styled.nav`
  nav {
    background: var(--body-color);
    box-shadow: var(--light-shadow);
    border-radius: 0 0 1rem 1rem;
  }

  .nav-header{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    text-transform: uppercase;
    // border-bottom: 1px solid
  }

  
  .nav-logo{
    color:var(--title-color);
    font-family:var(--logo-font);
    font-size: var(--h2-font-size);
    letter-spacing: var(--spacing);
    padding: 0 1rem 0 0.5rem;
    
    &:hover{
      color: var(--hover-color);
    }
  }

  .nav-toggle {
    font-size: var(--h1-font-size);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    &:hover{
      color: var(--hover-color);
      transform: rotate(90deg);
    }
  }
 
  .links-container {
    /* height: 0; */
    overflow: hidden;
    transition: var(--transition);
  }
  .links{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 1rem 0 1rem 0;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: var(--small-font-size);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      &:hover{
        color: var(--hover-color);
      }
    }

    .nav-icon{
      font-size: var(--h2-font-size);
    }
  }

  
  @media screen and (min-width: 767px){
    nav{
      border-radius: 0 0 0 0;
    }
    .nav-header {
      padding: 0;
    }
    .nav-center {
      /* max-width: 1170px;*/
      margin: 0 auto; 
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem;
    }

    .nav-toggle {
      display: none;
    }
    .nav-logo{
      color:var(--title-color);
    }

    .links{
      display:flex;
      justify-content: center;
      align-items: center;

      a {
        font-size: var(--normal-font-size);
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        transition: var(--transition);
        &:hover{
          color: var(--hover-color);
        }
      }
    }

    .nav-icon{
      display: none;
    }
  
  // .show-container{
  //   display: none;
  // } 

  



`

export default Navbar;