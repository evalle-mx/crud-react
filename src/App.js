import logo from './logo.svg';
import './App.css';
import Listar from "./componentes/Listar";
import Crear from "./componentes/Crear";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container">
      <nav class="navbar navbar-expand navbar-light bg-light">
          <div class="nav navbar-nav">
              <a class="nav-item nav-link active" href="/">Sistema <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="/crear">Crear empleado</a>
          </div>
      </nav>

      <Route exact path="/" component={Listar}></Route>
      <Route path="/crear" component={Crear}></Route>

    </div>
    </Router>
  );
}

export default App;
