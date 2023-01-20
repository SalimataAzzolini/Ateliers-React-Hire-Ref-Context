import React from 'react';
import { useRef, useEffect } from 'react';

const UseRefComponent = () => {
    const inputElement = useRef(null);

    useEffect(() =>{
        inputElement.current.focus();
    })

   
    const focusInput = () => {
    
      inputElement.current.value = inputElement.current.value.toUpperCase();
    }

    return (
        <div>
            Nom d'utilisateur : 
            <input type="text"  ref={inputElement} />
            <button onClick={focusInput}>Focus</button>
            
   
        </div>
    );
};

export default UseRefComponent;