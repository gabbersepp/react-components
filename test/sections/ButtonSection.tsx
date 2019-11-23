import * as React from "react";
import Section, { staticImplements } from "./Section";
import Button from "../../src/elements/Button";
import Label from "../../src/elements/Label";

@staticImplements<Section>()
export default class ButtonSection extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    public static className = "button-section";
    public static description = "Display a button";

    public render() {
        return (
            <div>
                <Label value={`Button was ${this.state.clicked ? "clicked" : "not-clicked"}`}></Label>
                <Button title="Click me" onClick={() => this.setState({ clicked: true})}></Button>
            </div>
        )
    }
}

interface State {
    clicked: boolean;
}