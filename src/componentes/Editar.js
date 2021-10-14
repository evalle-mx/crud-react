import React from 'react';

class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { datosCargados:false,
        empleado:[] }
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
                {empleado.id} <br/>
                {empleado.nombre}<br/> 
                {empleado.correo}
            </div>
            <div className="card-footer text-muted">
                Footer
            </div>
        </div> );
    }
}
export default Editar;