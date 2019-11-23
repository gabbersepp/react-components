import * as React from "react";
import Label from "../../src/elements/Label";
import Section, { staticImplements } from "./Section";

@staticImplements<Section>()
export default class LabelSection extends React.Component {
    public static description = "Show text in a label";
    public static className = "label-section";
    
    public render() {
        return (
            <Label value="Using a label you can display text"></Label>
        )
    }
}