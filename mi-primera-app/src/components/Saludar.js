import React from "react";

export default function Saludar(props)
{
    return(
        <>
            <button onClick={props.alertSaludoFnc(props.usuarioInfo.nombre, props.usuarioInfo.apaterno)}>Saludar</button>
        </>
    )
}

export function Gracias()
{
    return(
        <>
        </>
    )
}