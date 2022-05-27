import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import Services from "./components/Services/Services";


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Presentation/>
            <Services/>
        </div>
    );
};

export default App;