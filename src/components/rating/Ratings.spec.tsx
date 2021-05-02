import React from "react";
import Ratings from "./Ratings";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const starRatingsProps = {
  ratingType: "star",
  ratingValue: 5,
};

const selfRatingProps = {
  ratingType: "self",
  ratingValue: 4.5,
};

let wrapper;

describe("Ratings", () => {
  it("should render the star ratings container", () => {
    wrapper = shallow(<Ratings {...starRatingsProps} />);
    expect(wrapper.find(".star-rating").length).toBe(1);
  });

  it("should render the self ratings container", () => {
    wrapper = shallow(<Ratings {...selfRatingProps} />);
    expect(wrapper.find(".self-rating").length).toBe(1);
  });

  it("should render stars for the star rating container", () => {
    wrapper = mount(<Ratings {...starRatingsProps} />);
    expect(
      wrapper.children().find("ForwardRef(StarIcon)").length
    ).toBeGreaterThanOrEqual(1);
  });

  it("should render circles for the self rating container", () => {
    wrapper = mount(<Ratings {...selfRatingProps} />);
    expect(
      wrapper.children().find("ForwardRef(FiberManualRecordIcon)").length
    ).toBeGreaterThanOrEqual(1);
  });
});
