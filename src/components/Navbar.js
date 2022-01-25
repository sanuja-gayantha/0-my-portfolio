import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';

// custom imports
import {links} from '../data/data';
import {FaLinkedin, FaBars} from 'react-icons/fa';

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if(showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      }else{
        linksContainerRef.current.style.height = `0px`;
      }
    }, [showLinks]);

    return (
      <NavContainer>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to="/" className="nav-logo">Sanuja</Link>
            <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
              <FaBars />
            </button>           
          </div>

          <div className='links-container' ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
              {links.map((link) => {
                const { id, url, text, icon } = link;
                return (
                  <li key={id}>
                      <Link className='link' to={url} onClick={() => setShowLinks(!showLinks)}>
                        <div className="nav-icon">{icon}</div>
                        <div className="nav-title">{text}</div>
                      </Link>
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
    position:fixed;
    min-height:3rem;
    width:100vw;
    z-index: 1;
    // border: 1px solid;
    
  }

  .nav-header{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    // border-bottom: 1px solid
    
  }

  
  .nav-logo{
    color:var(--title-color);
    font-family:var(--logo-font);
    font-size: var(--h2-font-size);
    letter-spacing: var(--spacing);
    padding: 0 1rem 0 0.5rem;
    transition: var(--transition);
    &:hover{
      color: var(--hover-color);
    }
  }

  .nav-toggle {
    display: flex;
    font-size: var(--h1-font-size);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
      color: var(--hover-color);
      transform: rotate(90deg);
    }
  }
 
  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }
  .links{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 1rem 0 1rem 0;

    .link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: var(--small-font-size);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      color: var(--first-color-light-medium);
      &:hover{
        color: var(--hover-color);
        font-weight: 800;
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
      padding: 0.5rem 1rem;
    }

    .nav-toggle {
      display: none;
    }
    .nav-logo{
      color:var(--title-color);
    }
    .links-container {
      height: auto !important;
      padding: 0 0.5rem 0 0;
    }

    .links{
      display:flex;
      justify-content: center;
      align-items: center;

      .link {
        font-size: var(--normal-font-size);
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        transition: var(--transition);
        color: var(--first-color-light-medium);
        &:hover{
          color: var(--hover-color);
          font-weight: 800;
        }
      }
    }

    .nav-icon{
      display: none;
    }
`

export default Navbar;