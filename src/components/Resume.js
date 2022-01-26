import React from 'react';
import page1 from '../data/images/1.jpg'
import page2 from '../data/images/2.jpg'
import styled from 'styled-components';

const Resume = () => {
    return(
        <ResumeContainer>
        <section id="resume-section">
            <div className="resume-center">
                <h2 className="resume-title">my resume</h2>
                <img src={page1} className="about-image1" alt='image of page 1'></img>
                <img src={page2} className="about-image2" alt='image of page 2'></img>
  
            </div>
        </section>
        </ResumeContainer>


    )
}

const ResumeContainer = styled.section`
.resume-center {
  display:grid;
  grid-template-areas: 
    "title"
    "image1"
    "image2";

  grid-template-rows: 3rem auto auto;   
  gap:1rem;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top:3rem solid transparent;

}
.resume-title{
  grid-area: title;
  margin-top: 1rem;
  border-bottom: .2rem solid var(--hover-color);
}

.about-image1{
  grid-area: image1;
  width: 100%;
  height: 100%;
  padding: 0.5rem;

}
.about-image2{
  grid-area: image2;
  width: 100%;
  height: 100%;
  padding: 0.5rem;

}

@media screen and (min-width: 768px){
  .resume-center {
    margin: 0 auto;
    padding: 0 2rem;
    border-top:5rem solid transparent;
    width: 90%;
  }
  .resume-title{
    margin-top: 2rem;
  }
}
`

export default Resume;