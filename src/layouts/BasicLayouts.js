import React from "react";
import Header from "../components/header"
import Footer from "../components/footer"

function BasicLayout({children}) {
    return(
        <div>
          <Header/>
          <div style={{ marginTop: '0px' }}>{children}</div>
          <Footer/>
        </div>
    )
    
}

export default BasicLayout