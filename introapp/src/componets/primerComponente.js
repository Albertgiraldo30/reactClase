import React from "react";

//componente de clase
export default class PrimerComponente extends React.Component{
    render(){
        return <h1>Hola desde mi primer componente</h1>
    }
}

// componente de funcion normal

export function SegundoComponente({nombre, apellido}){
    return <h1>Segundo componente nombre {nombre} y {apellido} </h1>
}

//componente funcion flecha
export let TercerComponente = () => <h1>Tercer component</h1>

let nombre = "Juan";


