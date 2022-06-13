
import Header from './Header'
import './HeadBody.css'
import React, { useState } from 'react'

function HeadBody() {

    const [isActive, setIsActive] = useState(false);
    const [email, setemail] = useState("")
    const [test, settest] = useState("")

    function handlePasswordChange(text) {
        setemail(text);
      
        if (text != '') {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }


    return (
        <div className="header__body">
            <Header />
            <div className='body__content'>

               
                    <h1 className="description__head">
                        Melodies <br/> that help you <br /> stay focus
                    </h1>

                    <p className="desc__content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu lorem at leo viverra laoreet ut et purus <br/>
                    Phasellus venenatis aliquam mauris, vitae accumsan turpis malesuada ut. Donec mattis ac orci non sodales. <br/> Integer sodales id eros eu suscipit. Ut efficitur efficitur 
                    Checking the network cables
                    </p>

                        <div className ="box">
                            <div className="email__input">
                                <div class="user-box">
                                <input type="email"  value={email}
                                        onChange={(e) => handlePasswordChange(e.target.value)} required=""/>
                                <label className={ isActive ? "Active" : ""}>Your email address</label>
                                </div>

                                <button className="email__button">Get Started</button>
                            </div>
                            <img className="remyy" src="/images/remymusic.png" />
                        </div>
                       
                        <img className="waves" src="/images/sound.svg" />

                        <img className="forest" src="/images/forest.jpg" />

                        <img className="firefly" src="/images/firefly.jpg" />

                        <img className="hill" src="/images/hill.jpg" />

                        <img className="wavee" src="/images/wavee.jpg" />

                        
               

            </div>
        </div>
    )
}

export default HeadBody
