import React from 'react'
import './header.css'
import people from "../../Assets/people.png"
import ai from "../../Assets/ai.png"

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient_text"> Welcome to the future. Seamless technology at your disposal</h1>
                <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your e-mail address" />
                    <button type="button">Join Us</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1600 people requested access to visit in the last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai Image" />
            </div>

        </div>
    )
}

export default Header
