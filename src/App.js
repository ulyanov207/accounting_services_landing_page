import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import Services from "./components/Services/Services";
import Company from "./components/Company/Company";


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Presentation/>
            <Services/>
            <Company/>
        </div>
    );
};

export default App;