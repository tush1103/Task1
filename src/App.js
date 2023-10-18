import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
      <Footer/>
    </Fragment>
  );
}

export default App;
