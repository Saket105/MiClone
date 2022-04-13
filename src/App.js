import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider";
import Heading from "./components/Heading";
import Offers from "./components/Offers";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
const data = require("./data/data.json");


function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProducts={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu/>
    </Router>
  );
}

export default App;
