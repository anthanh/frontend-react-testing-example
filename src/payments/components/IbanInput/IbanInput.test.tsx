import React from "react";
import { shallow, mount } from "enzyme";
import IbanInput from ".";

describe("IbanInput", () => {
  let rendered;
  it("renders as expected", () => {
    rendered = shallow(<IbanInput />);
    expect(rendered.html()).toMatchSnapshot();
    expect(rendered.contains(<label htmlFor="iban">IBAN</label>)).toBe(true);
    expect(rendered.find("TextField")).toHaveLength(1);
  });

  it("renders as expected", () => {
    rendered = mount(<IbanInput />);

    expect(rendered.find("input")).toHaveLength(1);

    // rendered
    //   .find("IbanInput")
    //   .instance()
    //   .setValue({ target: { value: "customvalue" } });

    // rendered.update();
    // expect(rendered.find("input").props().value).toBe("customvalue");

    rendered
      .find("input")
      .simulate("change", { target: { value: "customvalue" } });
    expect(rendered.find(".iban-value").html()).toBe(
      '<p class="iban-value">customvalue</p>'
    );

    rendered
      .find("input")
      .simulate("change", { target: { value: "AT61 1904 3002 3457 1234" } });
    expect(rendered.find(".iban-valid").html()).toBe(
      '<p class="iban-valid">true</p>'
    );
  });
});
