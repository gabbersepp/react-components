import * as React from "react";
import Section, { staticImplements } from "./Section";
import Checkbox, { CheckboxCrossTypes } from "../../src/elements/Checkbox";
import Label from "../../src/elements/Label";

@staticImplements<Section>()
export default class CheckboxSection extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            checked: false
        }
    }

    public static description = "Display checkboxes with configurable look";
    public static className = "checkbox-section";

    public render() {
        return (
            <div>
                <Label value="Checkbox with default Cross, disable green hook box"></Label>
                <Checkbox onStateChange={c => this.setState({ checked: c })}></Checkbox>
                <Label value="Checkbox with green hook"></Label>
                <Checkbox crossType={CheckboxCrossTypes.GreenHook} disabled={this.state.checked}></Checkbox>
            </div>
        )
    }
}

interface State {
    checked: boolean;
}