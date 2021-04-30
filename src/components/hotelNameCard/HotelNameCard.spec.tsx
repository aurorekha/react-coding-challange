import React from "react";
import HotelNameCard from "./HotelNameCard";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Ratings from "../../components/rating/Ratings";

configure({ adapter: new Adapter() });

const hotelProps = {
  hotelName: "Hotel A",
  address: ["street a", "street b"],
  roomType: "King",
  cancellationType: "Non refundable",
  ratingValue: 3,
  ratingType: "self",
};

describe("HotelNameCard", () => {
  it("should have hoteNameCard container", () => {
    const wrapper = shallow(<HotelNameCard {...hotelProps} />);
    expect(wrapper.find(".hotelNameCard__container").length).toBe(1);
  });

  it("should have hotel title ", () => {
    const wrapper = shallow(<HotelNameCard {...hotelProps} />);
    expect(wrapper.find(".hotelNameCard__title").contains("Hotel A")).toBe(
      true
    );
  });

  it("should have Ratings component ", () => {
    const wrapper = shallow(<HotelNameCard {...hotelProps} />);
    expect(wrapper.containsMatchingElement(<Ratings />)).toEqual(true);
  });
});
