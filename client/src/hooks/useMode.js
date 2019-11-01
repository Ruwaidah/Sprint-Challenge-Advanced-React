import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useMode = (value) => {
    const [boolen, setBoolen] = useLocalStorage(value)


    const toggleMode = () => {
       setBoolen(!boolen);
    }
       if (boolen){
        document.getElementById('root').classList.add("ruwaidha")
            if (document.getElementById('btn'))
                document.getElementById('btn').classList.add("movebtn")

        console.log(boolen)
       }
    else{
        document.getElementById('root').classList.remove("ruwaidha");
        if (document.getElementById('btn'))
             document.getElementById('btn').classList.remove("movebtn") 

        console.log(boolen)
    }
    
    return [boolen, toggleMode]

}