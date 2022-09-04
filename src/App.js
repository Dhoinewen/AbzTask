import './App.scss';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Registration from "./components/Registration/Registration";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {



    return (
        <div className="App">
            <Header/>
            <img src={require('./media/pexels-alexandr-podvalny-1227513.jpeg')} alt='some' className={"myImg"}/>
            <List/>
            <Registration/>
        </div>
    );
}

export default App;
