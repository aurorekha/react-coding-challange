import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHotelData } from "./actions/actions";
import logo from "./images/qantas-logo.png";
import Dropdown from "./components/dropdown/Dropdown";
import ImageCardView from "./components/imageCard/ImageCardView";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const [dropDown, setDropDown] = useState(false);

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

  useEffect(() => {
    async function returnHotelData() {
      await getHotelData();
    }
    returnHotelData();
  }, []);

  return (
    <div className="main__container">
      <header className="">
        <img src={logo} alt="logo" className="main__logo" />
        <div className="main__header">
          <p className="main__hotel-results-list">
            {" "}
            {data.data.length}{" "}
            <span className="main__hotel-span"> hotels in </span>Sydney{" "}
          </p>{" "}
          <Dropdown handleDropdownSelect={handleDropdownSelect} />{" "}
        </div>{" "}
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
