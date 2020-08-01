import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render two <NavigationItem /> elements if not authenticated", () => {
    // expect navigation items to render two navigation item components since the shallow copy won't authenticate
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
  it("should render three <NavigationItem /> elements if authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    // expect navigation items to render three navigation item components
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
  it("should have logout navigation item", () => {
    wrapper.setProps({ isAuthenticated: true });
    // expect navigation items to render three navigation item components
    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true);
  });
});
