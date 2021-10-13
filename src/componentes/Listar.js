import React from 'react';
import { Link } from "react-router-dom";
class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    cargarDatos(){

        //fetch("https://jsonplaceholder.typicode.com/users")
        fetch("https://api.dailymotion.com/videos?channel=sport&limit=10")
        .then(respuesta=>respuesta.json())
        .then( (datosRespuesta) => {console.log(datosRespuesta)})
        .catch( console.log)
    }

    componentDidMount(){
        this.cargarDatos();
    }

    render() { 
        return ( <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td >1</td>
                    <td>Oscar</td>
                    <td>oscar@develoteca.com</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                            <Link className="btn btn-warning" to={"/editar"}>Editar</Link>
                            <button type="button" className="btn btn-danger">Borrar</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table> );
    }
}
export default Listar;