// import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default App;
