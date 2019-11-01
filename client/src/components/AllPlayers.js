import React from 'react'
import DisplayPlayer from './DisplayPlayer'

export default function AllPlayers(props) {
    console.log(props.data)
    return( 
        <div className = "allplayers">
           { props.data.map((element, index) => (
                    // <div  key = {index}> 
                        <DisplayPlayer element = {element} /> 
                    // </div>
                    )
            )}
        </div>
        )
}