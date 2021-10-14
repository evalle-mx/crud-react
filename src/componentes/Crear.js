import React from 'react';
import { Link } from "react-router-dom";


class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="card">
            <div className="card-header">
                Empleados
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="">Nombre:</label>
                        <input type="text" name="nombre" id="nombre" className="form-control" placeholder="" aria-describedby="helpId"/>
                        <small id="helpId" className="text-muted">Escribe el nombre del empleado</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="correo">Correo:</label>
                        <input type="text" name="correo" id="correo" className="form-control" placeholder="user@mail.com" aria-describedby="helpId"/>
                        <small id="helpId" className="text-muted">Correo del empleado</small>
                    </div>

                    <div className="btn-group" role="group" aria-label="">
                        <button type="submit" className="btn btn-success">Agregar nuevo empleado</button>
                        <Link className="btn btn-primary" to={"/"}>Cancelar</Link>
                    </div>

                </form>

            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div> );
    }
}
 
export default Crear;
