import "./App.css";
import LeftNavBar from "./components/Drawer";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LeftNavBar />
    </div>
  );
}

export default App;
