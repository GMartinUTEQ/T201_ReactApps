import React, {useState} from "react";

export default function Alumno(props)
{
    const{alumno} = props;
    const{grupo = "Sin asignar"} = alumno; 
        {/* Comentario */}
    return(
        
        <div>
            {/*
            Comentario
            */}

            {// Otro comentario
            }
            <h1>Nombre del alumno: {alumno.nombre}</h1>
            <h2>Matricula: {alumno.matricula}</h2>
            <h2>Grupo: {grupo}</h2>
            <h2>División: {alumno.division}</h2>
            <h2>Carrera: {alumno.carrera}</h2>
            <h2>Tutor: {alumno.tutor}</h2>
            <h2>Cuatrimestre: {alumno.cuatrimestre}</h2>
            <button onClick={() => props.alertaFnc(alumno.nombre, grupo)}>Saludar</button>
        </div>
    );
}