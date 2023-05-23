// import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <NavigationBar />
        <Outlet />
      </UserContextProvider>
    </div>
  );
}

export default App;
