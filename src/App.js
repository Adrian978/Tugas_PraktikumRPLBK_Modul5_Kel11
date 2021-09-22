import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Mobil from "./Components/Mobil";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="title">
          <p>Kelompok 11</p>
        </div>
        <nav>
          <Link className="text" to="/Mobil">
            Daftar Mobil
          </Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Mobil} />
        <Route path="/Mobil" exact component={Mobil} />
      </Switch>
    </BrowserRouter>
  );
}