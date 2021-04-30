import React from "react";
import { Provider } from "react-redux";
import { mount, shallow, configure } from "enzyme";
import configureStore from "./configureStore";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Dropdown from "./components/dropdown/Dropdown";
import ImageCardView from "./components/imageCard/ImageCardView";

// const configureStore = require("redux-mock-store");

configure({ adapter: new Adapter() });

const store = configureStore();

describe("App", () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  it("should contain the <Dropdown /> component", () => {
    expect(wrapper.containsMatchingElement(<Dropdown />)).toEqual(true);
  });

  it("should contain the <ImageCardView /> component", () => {
    expect(wrapper.containsMatchingElement(<ImageCardView />)).toEqual(true);
  });
});
