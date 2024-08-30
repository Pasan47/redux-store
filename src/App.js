import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
