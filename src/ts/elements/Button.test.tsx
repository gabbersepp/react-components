import { shallow } from 'enzyme'
import Button from "./Button";
import * as React from 'react';

describe("Test2", () => {
    it("asd", () => {
        const wrapper = shallow(<Button title="asd" onClick={() => {}}/>)
        expect(wrapper.text()).toBe("asd");
    })
})