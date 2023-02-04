import React from "react"

export default function Main () {
    return(
       <div>
        <div className="btn">
           
            <button className="emailBtn" type="button"><i class="fa-solid fa-envelope"></i>Email</button>
            <button className="LinkedIn" type="button"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
        </div>
        <div className="aboutMe">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptas quam quod voluptate exercitationem alias quo ex itaque nisi illum cupiditate quibusdam, consequatur fuga porro id atque, distinctio dolorum odio?</p>
        </div>
        <div className="Interests">
            <h3>Interest</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptas quam quod voluptate exercitationem alias quo ex itaque nisi illum cupiditate quibusdam, consequatur fuga porro id atque, distinctio dolorum odio?</p>
        </div>
       </div>
    )
}