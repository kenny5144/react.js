import React from "react"
import Kennysimg from "../Kennyojo.jpg"

export default function Header() {
    return(
        <div className="Header-div">
            <div className="header-img">
                <img src={Kennysimg} alt="img of kenny"></img>
            </div>
            <div className="NamendOthers">
                <h1>Kehinde ojo </h1>
                <h3 className="changecolor">Frontend Developer </h3>
                <p>KennysDomain.com</p>

            </div>

        </div>
    )
}