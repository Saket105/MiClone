import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider";
import Heading from "./components/Heading";
import Offers from "./components/Offers";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import ProductReviews from "./components/ProductReviews";
import HotAccessories from "./components/HotAccessories";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
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
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>
        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevics={data.hotAccessories.smartDevice}
              smartDevicsCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>

        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        ></Route>

        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifestyle={data.hotAccessories.lifeStyle}
              lifestyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        ></Route>

        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        ></Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />

      <Heading text="VIDEOS" />
      <Videos videos={data.videos}/>

      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
