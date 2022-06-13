import React from 'react'
import './AudioList.css'

function AudioList({id, name, views}) {
    return (
        <div className="audio__list">

            <div className="audio__number">
              <p>{id}</p>
            </div>
            
            <div className="weekly__music">
                <h6>{name}</h6>
                <p>{views}</p>
            </div>

        </div>
    )
}

export default AudioList
