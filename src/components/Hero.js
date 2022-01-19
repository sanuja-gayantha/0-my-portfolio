import React from 'react';
import styled from 'styled-components';
import {HashLink} from 'react-router-hash-link';

const Hero = () => {
    return (
        <HeroContainer>
        <section id="hero-section">
            <div className="hero-center">
                <div className="hero-info">
                    <h2 className="hero-intro">Hello from sanuja</h2>
                    <div className="hero-titles">
                        <div className="hero-titles-animation">
                            <div className="title-item">Web Developer</div>
                            <div className="title-item">Web Designer</div>
                            <div className="title-item">UI/UX Designer</div>
                            <div className="title-item">Full-stack Developer</div>
                            <div className="title-item">Mobile Developer</div>
                        </div>
                    </div>
                    <div className="hero-description">
                        Experience in web application development and producing quality work.
                    </div>
                    <HashLink to="/contact">
                      <button className="btn">contect me</button>
                    </HashLink>
                </div>
            </div>
        </section>
        </HeroContainer>
    )
}

const HeroContainer = styled.section`

.hero-center {
    display:grid;
    grid-template-columns: 1fr;
    height: 100%;
    justify-content: center;
    align-items: center;
  
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-top:3rem solid transparent;

  }
  .hero-info{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    height:100%;
  }

  .hero-intro{
    font-size:var(--big-font-size);
    font-family: var(--logo-font);
  }
  .hero-titles{
    height:50px;
    overflow:hidden;
  }
  .title-item{
    display:flex;
    height:50px;
    font-size:var(--h2-font-size);
    align-items:top;
    justify-content:center;
    color:var(--hover-color);
    font-weight:var(--font-semi-bold);
  }
  .hero-titles-animation{
    height:100%;
    animation:move 10s ease-in-out infinite alternate;
  }
  @keyframes move {
    25%{
      transform:translateY(-50px);
    }
    50%{
      transform:translateY(-100px);
    }
    75%{
      transform:translateY(-150px);
    }
    100%{
      transform:translateY(-200px);
    }
  }
  .hero-description{
    display:flex;
    align-items:center;
    justify-content:center;
    margin:.5rem;
    
  }

`

export default Hero;