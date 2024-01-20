import { useState } from "react"

export function Texto(){
    //var texto="Encendido";
    var [texto, setTexto]=useState("Encendido");
    function switch2(){
        if(texto==="Encendido"){
            setTexto("Apagado");
        }
        else{
            setTexto("Encendido")
        }
    }
    return (
        <>
            <div>{texto}</div>
            <button onClick={switch2}> Apagar/Encender</button>
        </>
    )
}