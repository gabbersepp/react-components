import * as React from "react";
import Label from "./Label";
import { shallow } from "enzyme";

describe("Label", () => {
    it("should update value on props update", () => {
        const wrapper = shallow(<Label value="initial"/>);
        expect(wrapper.html()).toContain("initial");
        wrapper.setProps({ value: "after update" });
        expect(wrapper.html()).toContain("after update");
    })
})
