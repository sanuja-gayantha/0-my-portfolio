import React from 'react';
import Me2 from '../data/images/me2.jpg'
import styled from 'styled-components';

const About = () => {
    return(
        <AboutContainer>
        <section id="about-section">
            <div className="about-center">
                <h2 className="section-title">about me</h2>
                <img src={Me2} className="about-image" alt='image of me'></img>
                <div className="about-description">
                    <ul className="about-info">
                        <li>
                            I describe myself as a self learning passionate developer who loves coding, and designing. Coding have been my passion since the days I started working with computers  ❤️.
                        </li>
                        <li>
                            I'm interest in react.js ⚛️ and familiar with JavaScript, React.js, Python, C++, HTML5, CSS, Bootstrap, Redux, Node.js, SQL, PHP, CodeIgniter, .NET, Java, Ajax, JSON, etc.
                        </li>
                    </ul>
                <div className="about-quoto">
                  “Everything should be made as simple as possible, but no simpler”
                </div>
                </div>
            </div>
        </section>
        </AboutContainer>


    )
}

const AboutContainer = styled.section`
.about-center {
    display:grid;
    grid-template-areas: 
      "title"
      "image"
      "description";
  
    grid-template-rows: 3rem auto;   
    gap:1rem;
    justify-items: center;
    align-items: center;
    margin: 0 1rem;
    height: 100%;
    width: auto;
    justify-content: center;
    align-items: center;
    border-top:3rem solid transparent;
  
  }
  .section-title{
    grid-area: title;
    margin-top: 1rem;
    border-bottom: .2rem solid var(--hover-color);
  }
  
  .about-image{
    grid-area: image;
    width: 200px;
    height: 200px;
    border-radius:25rem;
    padding: 0.5rem;
    border:2px solid;
    border-color: var(--hover-color);
  }
  .about-description{
    grid-area: description;
    justify-content: center;
    align-items: center;
    display:flex;
    gap: 1rem;
    flex-direction: column;
    font-size: var(--normal-font-size);
    padding: 0.5rem;
  
  }
  .about-description li{
    padding-bottom: 0.25rem;
  }
  
  .about-quoto{
    color: var(--hover-color);
    font-style: italic;
  }
  
  @media screen and (min-width: 768px){
    .about-center {
      display:grid;
      grid-template-areas: 
        "title title"
        "image description";
      grid-template-rows: 5rem auto;   
      gap:1rem;
    
      justify-items: center;
      align-items: center;
      margin: 0 2rem;
      padding: 0 2rem;
  
      height: 100%;
      justify-content: center;
      align-items: center;
      border-top:5rem solid transparent;
    
    }
    .about-description{
      font-size: var(--h3-font-size);
    }
    .section-title{
      margin-top: 2rem;
    }
  }
`

export default About;