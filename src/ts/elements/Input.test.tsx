import "jsdom-global/register";
import * as React from "react";
import { mount, shallow } from "enzyme";
import Input from "./Input";
import IInputProps from "./../interfaces/IInputProps";

describe("Input", () => {
    let onChangeFn: jest.Mock;

    beforeEach(() => {
        onChangeFn = jest.fn();
    })

    it("should update value on props change", () => {
        const wrapper = mount<Input, IInputProps>(<Input onChange={onChangeFn} value="test"/>);
        wrapper.setProps({ value: "Update test" });
        expect(wrapper.find("input").html()).toMatch(/value=.?Update test.?/);
        wrapper.unmount();
    })

    it("should trigger onFucus handler", () => {
        const onFocusFn = jest.fn();
        const wrapper = shallow(<Input onChange={onChangeFn} onFocus={onFocusFn} />);
        wrapper.find("input").simulate("focus");
        expect(onFocusFn).toHaveBeenCalled();
    })

    /*it("should pass key events to callback function", () => {
        const wrapper = mount(<Input onChange={onChangeFn}/>);
        wrapper.find("input").simulate("change", { target: { value: "foo" }});
        wrapper.update();
        expect(onChangeFn).toHaveBeenCalledWith("foo");
    })*/
})