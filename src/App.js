import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Presentation/>
        </div>
    );
};

export default App;