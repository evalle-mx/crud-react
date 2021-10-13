import logo from './logo.svg';
import './App.css';
import Listar from "./componentes/Listar";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container">
      <nav class="navbar navbar-expand navbar-light bg-light">
          <div class="nav navbar-nav">
              <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#">Home</a>
          </div>
      </nav>

      <Route exact path="/" component={Listar}></Route>

    </div>
    </Router>
  );
}

export default App;
