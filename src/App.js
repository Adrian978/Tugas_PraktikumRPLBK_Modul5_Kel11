import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Mobil from "./Components/Mobil";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="title">
          <p>Kelompok 11</p>
        </div>
        <nav>
          <Link className="text" to="/Home">
            Homeㅤ
          </Link>
          <Link className="text" to="/Mobil">
            Daftar Mobil
          </Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Mobil" exact component={Mobil} />
      </Switch>
    </BrowserRouter>
  );
}