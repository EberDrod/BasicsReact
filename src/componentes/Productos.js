import React, {Component} from 'react';


class Productos extends Component{
    render(){
        return (
             <div>
                <h2>Listado de Productos</h2>
                {console.log(this.props.productos)}
            </div>
        )
    }

} 
export default Productos;