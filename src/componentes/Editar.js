import React from 'react';
import { Link } from "react-router-dom";

class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { datosCargados:false,
        empleado:[] }
    }

    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name]=e.target.value;
        this.setState({ empleado:state });
    }

    enviarDatos = (e) => {
        e.preventDefault();
        console.log('Formulario enviado...');
    }

    componentDidMount(){
        console.log(this.props.match.params.id);

        fetch("http://127.0.0.1/empleados/?consultar="+this.props.match.params.id)
        .then(respuesta=>respuesta.json())
        .then( (datosRespuesta) => {

                console.log('=>'+datosRespuesta);
                this.setState({ datosCargados:true, empleado:datosRespuesta[0]})
            })
        .catch( console.log)
    }

    render() { 
        const{datosCargados, empleado }=this.state

        return ( <div className="card">
            <div className="card-header">
                Editar Empleados
            </div>
            <div className="card-body">

                <form onSubmit={this.enviarDatos}>
                    {empleado.id}
                    <div className="form-group">
                        <label htmlFor="">Nombre:</label>
                        <input type="text" name="nombre" id="nombre" value={empleado.nombre} onChange={this.cambioValor} className="form-control" placeholder="" aria-describedby="helpId"/>
                        <small id="helpId" className="text-muted">Escribe el nombre del empleado</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="correo">Correo:</label>
                        <input type="text" name="correo" id="correo" value={empleado.correo} onChange={this.cambioValor} className="form-control" placeholder="user@mail.com" aria-describedby="helpId"/>
                        <small id="helpId" className="text-muted">Correo del empleado</small>
                    </div>

                    <div className="btn-group" role="group" aria-label="">
                        <button type="submit" className="btn btn-success">Agregar nuevo empleado</button>
                        <Link className="btn btn-primary" to={"/"}>Cancelar</Link>
                    </div>

                </form>
            </div>
            <div className="card-footer text-muted">
                Footer
            </div>
        </div> );
    }
}
export default Editar;