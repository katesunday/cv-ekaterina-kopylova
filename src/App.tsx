import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import AllSkills from "./skills/AllSkills";
import Contacts from "./contacts/Contacts";
import AllProjects from "./projects/AllProjects";
import Footer from "./footer/Footer";
import AboutMe from "./hireMe/HireMe";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AllSkills/>
            <AllProjects/>
            <AboutMe/>
            <Contacts/>
            <Footer/>
        </div>
    );
}


export default App;
