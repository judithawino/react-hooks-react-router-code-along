import React from 'react';
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import { Routes, Route} from "react-router-dom";

export default function App(){
    return(
       <div>
        <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/About' element={<About/>}/>
            <Route exact path='/Login' element={<Login/>}/>
        </Routes>   
       </div> 
    )
}
