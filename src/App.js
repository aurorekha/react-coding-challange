import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotelData } from "./actions/actions";
import logo from "./images/qantas-logo.png";
import Dropdown from "./components/dropdown/Dropdown";
import ImageCardView from "./components/imageCard/ImageCardView";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const [dropDown, setDropDown] = useState(false);

  const hotelData = useSelector((state) => state.data);
  const data = dispatch(getHotelData());

  const sortLowToHigh = () => {
    return data.data
      .sort(
        (a, b) =>
          parseFloat(a.offer.displayPrice.amount) -
          parseFloat(b.offer.displayPrice.amount)
      )
      .map((hotel, index) => {
        return <ImageCardView key={index} hotel={hotel} index={index} />;
      });
  };

  const sortHighToLow = () => {
    return data.data
      .sort(
        (a, b) =>
          parseFloat(b.offer.displayPrice.amount) -
          parseFloat(a.offer.displayPrice.amount)
      )
      .map((hotel, index) => {
        return <ImageCardView key={index} hotel={hotel} index={index} />;
      });
  };

  const handleDropdownSelect = (event) => {
    if (event.target.value === "lowToHigh") {
      setDropDown(!dropDown);
      sortLowToHigh();
    }
    if (event.target.value === "highToLow") {
      setDropDown(!dropDown);
      sortHighToLow();
    }
  };

  useEffect(() => hotelData, []);

  return (
    <div className="main__container">
      <header className="">
        <img src={logo} alt="logo" className="main__logo" />
        <h3 className="">
          {" "}
          5 <span> hotels in </span>Sydney
        </h3>
        <Dropdown handleDropdownSelect={handleDropdownSelect} />{" "}
        {data
          ? data.data.map((hotel, index) => {
              return <ImageCardView key={index} hotel={hotel} index={index} />;
            })
          : dropDown}{" "}
      </header>{" "}
    </div>
  );
}

export default App;
