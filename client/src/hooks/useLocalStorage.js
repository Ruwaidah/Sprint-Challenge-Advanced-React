import { useState } from 'react'

export const useLocalStorage = (key, startValue) => {
    const [storedValue, setStoredValue] = useState(() =>{
        const item = window.localStorage.getItem(key);
        return item? JSON.parse(item) : startValue;
    })

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue]
}