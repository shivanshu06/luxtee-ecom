import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./containers/home"
import Products from "./containers/products"
import Contact from "./containers/contact"

function Rout(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}

export default Rout