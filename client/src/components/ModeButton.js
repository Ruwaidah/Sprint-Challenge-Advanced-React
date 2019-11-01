import React from 'react'
import { useMode } from '../hooks/useMode'

export default function ModeButton() {
    const [boolen, toggleMode] = useMode(false)

    // boolen?  
    //     document.querySelector('#root').classList.add("ruwaidha") : 
    //     document.querySelector('#root').classList.remove("ruwaidha")  
    return(
        <div className = "nav">
            <h1 className = "header">World Women Cup</h1>
            <div  className = "modechange" id = "btn" onClick = {toggleMode}>
                <div className = "button" ></div>
            </div>
        </div>
    )
}