import React from 'react' 

export default function DisplayPlayer(props) {
    return (
        <div className = "player">
            <h1>{props.element.name}</h1>
            <h3>{props.element.country}</h3>
            <h3>{props.element.searches}</h3>
        </div>
    )
}