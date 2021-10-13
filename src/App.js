// import logo from './logo.svg';
import './App.css';
import Listar from "./componentes/Listar";
import Crear from "./componentes/Crear";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container">
      <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
              <a className="nav-item nav-link active" href="/">Sistema <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/crear">Crear empleado</a>
          </div>
      </nav>

      <Route exact path="/" component={Listar}></Route>
      <Route path="/crear" component={Crear}></Route>

    </div>
    </Router>
  );
}

export default App;
