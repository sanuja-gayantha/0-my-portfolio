import React from 'react';

// custom import
import Hero from '../components/Hero';
import About from '../components/About';
import Technologies from '../components/Technologies';
import ProjectsBar from '../components/ProjectsBar';
import Contect from '../components/Contect';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <>
         <Hero /> 
         <About />  
         <Technologies />  
         <ProjectsBar />  
         <Contect />
         <Footer />    
        </>
    )
}

export default Home;