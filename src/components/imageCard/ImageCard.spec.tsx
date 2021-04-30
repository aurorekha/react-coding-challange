import React from "react";
import ImageCard from "./ImageCard";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HotelNameCard from "../hotelNameCard/HotelNameCard";
import PriceDetails from "../priceDetails/PriceDetails";

configure({ adapter: new Adapter() });

const imageCardProps = {
  imageUrl: "http://url//url",
  dealType: "Exclusive",
  hotelName: "Hotel B",
  address: ["Street a", "street b"],
  roomType: "Deluxe",
  cancellationType: "Non refundable",
  totalAmount: 1234,
  currency: "AUD",
  ratingValue: 4,
  ratingType: "star",
};

const wrapper = shallow(<ImageCard {...imageCardProps} />);

describe("ImageCard", () => {
  it("should render the imagecard container with all of it/'s props", () => {
    expect(wrapper.find(".imageCard__container").length).toBe(1);
  });

  it("should render HotelNameCard component ", () => {
    expect(wrapper.containsMatchingElement(<HotelNameCard />)).toEqual(true);
  });

  it("should render PriceDetails component ", () => {
    expect(wrapper.containsMatchingElement(<PriceDetails />)).toEqual(true);
  });
});
