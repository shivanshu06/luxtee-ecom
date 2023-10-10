import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./containers/home"
import Products from "./containers/category"
import Contact from "./containers/contact"
import Collection from "./containers/collection"
import Shoppingcart from "./containers/shoppingcart";
import Details from "./containers/detailedproduct"

function Rout(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category" element={<Products/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/collection/:category" element={<Collection/>}></Route>
            <Route path="/shoppingcart" element={<Shoppingcart/>}/>
            <Route path="/collection/:category/:id" element={<Details/>}/>
        </Routes>
    )
}

export default Rout