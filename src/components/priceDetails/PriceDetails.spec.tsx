import React from "react";
import PriceDetails from "./PriceDetails";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const priceDetailsProps = {
  totalNights: 2,
  totalAmount: 1234,
  currency: "AUD",
  discount: false,
  discountAmount: 122,
};

const wrapper = shallow(<PriceDetails {...priceDetailsProps} />);

describe("PriceDetails", () => {
  it("should render the priceDetails container with all of it/'s props", () => {
    console.log(wrapper.debug());
    expect(wrapper.find(".priceDetails__container").length).toBe(1);
  });
});
