import React from 'react';
class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                            <button type="button" className="btn btn-warning">Editar</button>
                            <button type="button" className="btn btn-danger">Borrar</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table> );
    }
}
export default Listar;