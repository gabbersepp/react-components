import { shallow } from "enzyme";
import Checkbox from "./Checkbox";
import * as React from "react";

describe("Checkbox", () => {
    const onChangeFn = jest.fn();
    it("should be toggled on click", () => {
        const wrapper = shallow(<Checkbox onStateChange={onChangeFn}/>);
        wrapper.find("div").hasClass("chk-box");
        expect(wrapper.find("div").hasClass("chk-box--checked")).not.toBeTruthy();
        wrapper.simulate("click");
        expect(wrapper.hasClass("1chk-box--checked")).toBeTruthy();
        expect(onChangeFn).toHaveBeenCalledWith(true);
    })
})
