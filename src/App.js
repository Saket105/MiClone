import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider";
import Heading from "./components/Heading";
import Offers from "./components/Offers";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
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
      <HotAccessoriesMenu />
      {/* <Route exact path="/music"> */}
      <HotAccessories
        music={data.hotAccessories.music}
        musicCover={data.hotAccessoriesCover.music}
      />
      {/* </Route> */}
    </Router>
  );
}

export default App;
