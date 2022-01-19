import React from 'react';
import styled from 'styled-components'

// custom import
import {projectsData} from '../data/data';

const Projects = () => {
    return(
        <ProjectsContainer>
        <div id="projects">
        <div className="project-title">
            <h2 className="project-bar-title">projects</h2>
        </div>
        <div id="projects-section">
            {projectsData.map((data) => {
                const {id, title, img, app_url} = data;
                return (
                    // {`projects-card ${id*3%5 ? 'card-tall' : 'card-wide'}`}
                    <div key={id} className="projects-card">
                        <img src={img} alt={title} />
                        <div className='projects-photo-info'>
                            <h4 className='photo-title'>{title}</h4>
                            <a target='_blank' href={app_url}>Check app / info</a>
                        </div>
                    </div>
                );
            })}
        </div>       
        </div>
        </ProjectsContainer>

    )
}

const ProjectsContainer = styled.div`

#projects-section{
    border-top:1rem solid transparent;
    display:grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-auto-rows: 230px;
    margin: 0 1.5rem;
  }

  .project-title{
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-top:3.5rem solid transparent;
  }
  .project-bar-title{
    border-bottom: .2rem solid var(--hover-color);
  }

  .projects-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    background:#353535;
    color:#fff;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    height: 100%;
    width: 100%;
    transition: all 500ms;
    overflow: hidden;
  
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }
  .projects-card img{
    width: 100%;
  }
  .projects-photo-info{
    position: absolute;
    width: 100%;
    padding: 1rem;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    transform: translateY(100%);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  
  .projects-card:hover{
    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
    transform: translateY(-3px) scale(1.1);
  }
  
  .projects-card:hover .projects-photo-info{
    transform: translateY(0);
  }
  .projects-photo-info h4,a{
    font-size: var(--small-font-size);
    color: var(--body-color);
    font-weight: var(--font-semi-bold);
  }
  .projects-photo-info h4{
    padding: 1rem;
  }
  .projects-photo-info a{
    border: 1px solid;
    padding:0.5rem;
    transition: var(--transition);
    width:auto;
    display: flex;
    justify-content: center;
  }
  .projects-photo-info a:hover{
    color: var(--title-color);
    background-color: var(--body-color);
    border-color: var(--body-color);
  }
  
  @media screen and (min-width: 768px){
    .project-title{
      border-top:5rem solid transparent;
    }
    .card-tall{
      grid-row:span 2/auto;
    }
    .grid-wid{
      grid-column:span 2/auto;
    }
    
  }
  
`


export default Projects;