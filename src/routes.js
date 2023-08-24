import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./containers/home"
import Products from "./containers/products"

function Rout(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>
    )
}

export default Rout