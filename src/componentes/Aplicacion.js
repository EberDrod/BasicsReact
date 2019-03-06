import React, {Component} from 'react';
import Productos  from './Productos';
import Footer from './Footer';
import Header from './Header';

class Aplicacion extends Component{
 


    render(){
        const productos = [
            {nombre:'Libro', precio:200},
            {nombre:'Disco de Musica ', precio:100},
            {nombre:'Instrumento Musical', precio:800},
            {nombre:'Reproductor Musical', precio:1500},
            {nombre:'Album Ed. Especial', precio:200}
            
    
        ] 
        return (
            <div>
                    <Header
                        titulo= "Nuestra tienda Virtual"
                    />           
                    <Productos
                        productos= {productos}  
                    /> 
                    <Footer/>
            </div>
         )
    }
}

export default Aplicacion;