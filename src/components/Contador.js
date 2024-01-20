import { useState } from "react";

export function Contador(){
    const [cont, setCont]=useState(0);
    function avanzar(){
        setCont(cont +1);

    }
    return(
        <>
            <div> El contador es: {cont} </div>
            <button onClick={avanzar}> Incrementar el contador</button> 
        
        </>
    )
}