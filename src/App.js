import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import Services from "./components/Services/Services";
import Company from "./components/Company/Company";
import Clients from "./components/Clients/Clients";
import Reviews from "./components/Reviews/Reviews";


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Presentation/>
            <Services/>
            <Company/>
            <Clients/>
            <Reviews/>
        </div>
    );
};

export default App;