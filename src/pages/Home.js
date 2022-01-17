import React from 'react';

// custom import
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsBar from '../components/ProjectsBar';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Space from '../components/Space';

const Home = () => {
    return(
        <div className="main">
                <Navbar />
                <Space/>
                <Hero /> 
                <About />  
                <ProjectsBar />  
                <Contact /> 
        </div>
    )
}

export default Home;