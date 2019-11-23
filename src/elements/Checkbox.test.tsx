import { shallow } from "enzyme";
import Checkbox from "./Checkbox";
import * as React from "react";
import ICheckboxProps from "../interfaces/ICheckboxProps";

describe("Checkbox", () => {
    let onChangeFn: jest.Mock;

    beforeEach(() => {
        onChangeFn = jest.fn();
    })

    it("should be toggled on click", () => {
        const wrapper = shallow(<Checkbox onStateChange={onChangeFn}/>);
        expect(wrapper.find("div").hasClass("chk-box--checked")).not.toBeTruthy();
        wrapper.simulate("click");
        expect(wrapper.hasClass("chk-box--checked")).toBeTruthy();
        expect(onChangeFn).toHaveBeenCalledWith(true);
    })

    it("should not be toggled if disabled", () => {
        const wrapper = shallow(<Checkbox disabled={true} onStateChange={onChangeFn}/>);
        wrapper.simulate("click");
        expect(wrapper.hasClass("chk-box--checked")).not.toBeTruthy();
        expect(onChangeFn).not.toHaveBeenCalled();
    })

    it("should update on props change", () => {
        const wrapper = shallow<Checkbox, ICheckboxProps>(<Checkbox onStateChange={onChangeFn}/>);
        wrapper.setProps({
            disabled: true
        });
        expect(wrapper.hasClass("chk-box--disabled")).toBeTruthy();

        wrapper.setProps({
            disabled: false,
            checked: true
        });

        expect(wrapper.hasClass("chk-box--checked")).toBeTruthy();
    })
})
