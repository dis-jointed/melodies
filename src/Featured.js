import React from 'react'
import AudioList from './AudioList'
import './Featured.css'
import Video from './Video'

function Featured() {
    return (
        <div className="featured">
            <div className="left__cont">
                    <h3 className="featured__title">Featured Melody</h3>
                    
                    <div className='music__container'>
                        <Video />
                        <Video />
                    </div>
                   
            </div>
            <div className="right__cont">

                <h3>Weekly Popular</h3>

                <AudioList 
                 id="1"
                 name="Danger dinji"
                 views="1,000,325" />

                <AudioList 
                 id="2"
                 name="Relentless again"
                 views="1,000,325" />

                <AudioList 
                 id="3"
                 name="Weekendy"
                 views="1,645,645" />

                <AudioList 
                 id="4"
                 name="Said sum"
                 views="435,349" />
               

            </div>
           
        </div>
    )
}

export default Featured
