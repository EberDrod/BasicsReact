import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    //const nombre = 'Eber';

    const empleado = {
      nombre: 'Eber',
      trabajo:'Desarrollador Web'
    }
    return (

      <React.Fragment>
      <h1 className= "mayusculas">Detalles de:</h1>  
      <p>Nombre:{empleado.nombre}</p>
      <p>Trabaja de:{empleado.trabajo}</p>
      </React.Fragment>
    );
  }
}

export default App;
