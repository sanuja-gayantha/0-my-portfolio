import React from 'react';
import styled from 'styled-components'

// custom imports
import Me2 from '../data/images/me2.jpg'
import {projectBarData} from '../data/data';


const ProjectsBar = () => {
    return(
        <ProjectsBarContainer>
            <section className="project-bar-section">
                <div className="project-bar-center">
                    <h2 className="project-bar-title">projects</h2>
                    <div className="project-bar-images">
                            {projectBarData.map((data) => {
                                const {id, title, category, img, desc, app_url} = data;
                                console.log(img)
                                return (
                                    <div key={id} className='project-bar-card'>
                                        <img src={img} alt={title} />
                                        <div className='project-bar-photo-info'>
                                            <h4 className='photo-title'>{title}</h4>
                                            <a target='_blank' href={app_url}>Check app</a>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                    <div className="project-bar-button">
                        <button className="btn">Explor more</button>
                    </div>
                </div>
            </section>
        </ProjectsBarContainer>
    )
}

const ProjectsBarContainer = styled.section`

.project-bar-center {
    display:grid;
    grid-template-areas: 
      "title"
      "images"
      "button";
  
    grid-template-rows: 3rem calc(90vh - 12rem) 6rem;   
    gap:1rem;
    justify-items: center;
    align-items: center;
    margin: 0 1rem;
    height: 100%;
    width: auto;
    justify-content: center;
    align-items: center;
    overflow:hidden;
  }
  .project-bar-title{
    grid-area: title;
    margin-top: 1rem;
    border-bottom: .2rem solid var(--hover-color);
  }
  
  .project-bar-images{
    grid-area: images;
    width: 90vw;
    height: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
  
  .project-bar-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    height: 100%;
    width: 90%;
    margin: 0 auto;
    transition: all 500ms;
    overflow: hidden;
  
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }
  
  
  .project-bar-photo-info{
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
    justify-content: space-between;
    align-items: center;
  }
  
  .project-bar-card:hover .project-bar-photo-info{
    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
    transform: translateY(0);
  }
  
  .project-bar-photo-info h4,a{
    font-size: var(--h4-font-size);
    color: var(--body-color);
    font-weight: var(--font-semi-bold);
  }
  .project-bar-photo-info a{
    border: 1px solid;
    padding:0.5rem;
  }
  
  .project-bar-button{
    grid-area: button;
    justify-content: center;
    align-items: center;
    display:flex;
    gap: 1rem;
    flex-direction: column;
    font-size: var(--normal-font-size);
    padding: 0.5rem;
  }
  
  
  .btn {
    text-transform: uppercase;
    background: var(--hover-color);
    color: var(--body-color);
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 600;
    transition: var(--transition);
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    // border-radius: var(--radius);
    border-color: transparent;
  }
  .btn:hover {
    color: var(--title-color);
    background: var(--first-color-light-medium);
  }

`

export default ProjectsBar;