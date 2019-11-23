import { shallow } from 'enzyme'
import Button from "./Button";
import * as React from 'react';

describe("Button", () => {
    it("should have title 'Test title'", () => {
        const wrapper = shallow(<Button title="Test title" onClick={() => {}}/>)
        expect(wrapper.text()).toBe("Test title");
    });

    it("should react to click", () => {
        const clickFn = jest.fn();
        const wrapper = shallow(<Button title="" onClick={clickFn}/>);
        wrapper.find("div").simulate("click");
        expect(clickFn).toHaveBeenCalledTimes(1);
    });
})