import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import configRoutes from "./config/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          {configRoutes.map((routeObj, i) => {
            const { route, component: Component } = routeObj;
            return <Route path={route} element={<Component />} key={i} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
