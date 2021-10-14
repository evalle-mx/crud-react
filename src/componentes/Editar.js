import React from 'react';
import { Link } from "react-router-dom";
import Api from "../servicios/api";

class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            datosCargados:false,
            empleado:[] 
        }
    }

    cambioValor = (e) => {
        const state = this.state.empleado;
        state[e.target.name]=e.target.value;
        this.setState({ empleado:state });
    }

    enviarDatos = (e) => {
        e.preventDefault();
        console.log('Formulario enviado...');

        const{ id, nombre, correo }= this.state.empleado;
        console.log(id);
        console.log(nombre);
        console.log(correo);

        var datosEnviar = {id:id, nombre:nombre, correo:correo};
        //fetch("http://127.0.0.1/empleados/?actualizar=1", {
        fetch(Api +'?actualizar=1', {
            method:"POST",
            body:JSON.stringify(datosEnviar)
        })
        .then(respuesta=>respuesta.json())
        .then( (datosRespuesta) => {

                console.log(datosRespuesta);
                this.props.history.push("/");
            })
        .catch( console.log)
    }

    componentDidMount(){
        console.log(this.props.match.params.id);

        //fetch("http://127.0.0.1/empleados/?consultar="+this.props.match.params.id)
        fetch(Api +'?consultar='+this.props.match.params.id)
        .then(respuesta=>respuesta.json())
        .then( (datosRespuesta) => {

                console.log('=>'+datosRespuesta);
                this.setState({ datosCargados:true, empleado:datosRespuesta[0]})
            })
        .catch( console.log)
    }

    render() { 
        const{datosCargados, empleado }=this.state

        if(!datosCargados){  return (<div>Cargando...</div>); }
        else{
            return ( 
                <div className="card">
                    <div className="card-header">
                        Editar Empleados
                    </div>
                    <div className="card-body">

                        <form onSubmit={this.enviarDatos}>
                            <div className="form-group">
                                <label htmlFor="id"></label>
                                <input type="text" readOnly className="form-control" name="id" id="id" value={empleado.id}
                                    aria-describedby="helpId" placeholder=""/>
                                <small id="helpId" className="form-text text-muted">Clave</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" name="nombre" id="nombre" value={empleado.nombre} onChange={this.cambioValor} className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Escribe el nombre del empleado</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="correo">Correo:</label>
                                <input type="text" name="correo" id="correo" value={empleado.correo} onChange={this.cambioValor} className="form-control" placeholder="user@mail.com" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Correo del empleado</small>
                            </div>

                            <div className="btn-group" role="group" aria-label="">
                                <button type="submit" className="btn btn-success">Actualizar empleado</button>
                                <Link className="btn btn-primary" to={"/"}>Cancelar</Link>
                            </div>

                        </form>
                    </div>
                    <div className="card-footer text-muted">
                        
                    </div>
                </div>
            );
        }
    }
}
export default Editar;