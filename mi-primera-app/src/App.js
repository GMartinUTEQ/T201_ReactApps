import logo from './logo.svg';
import './App.css';
import Alumno from './components/Alumno';
import {useState} from 'react';

function App() {

  const[inscrito, setInscrito] = useState(false);

  const InscribirDesinscribir = () => {
    setInscrito(prevValue => !prevValue);
  } 
  
  const alerta = (nombre_recibido, grupo_recibido) => {
      alert(`Bienvenido ${nombre_recibido} del grupo: ${grupo_recibido}`);
      console.log(`Bienvenido ${nombre_recibido} del grupo: ${grupo_recibido}`);
  };
  const infoAlumno = {
    nombre :"Miguel Ávila",
    matricula:"2020060606",
    grupo: "T208",
    carrera:"Desarrollo de Software Multiplataforma",
    division:"DTAI",
    tutor:"Jorge Morales AKA El pechocho",
    cuatrimestre:"5to."

  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={InscribirDesinscribir}>Inscribir / Desinscribir</button>
        <h1>El alumno está: {inscrito ? "Inscrito" : "No inscrito"}</h1>
        <Alumno alertaFnc={alerta} alumno={infoAlumno} carr={infoAlumno.carrera} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
