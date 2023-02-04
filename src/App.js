import React from "react"
import Header from "./Component/Header"
import Main from "./Component/Main"
import Footer from "./Component/Footer"
import "./style.css"

export default function App () {
    return(
        <div className="Container">
      

            <Header  />
            <Main />
            <Footer/>
        </div>
    )
}
