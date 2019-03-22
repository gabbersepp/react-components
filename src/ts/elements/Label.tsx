import * as React from "react";
import { ILabelProps } from "../interfaces/ILabelProps";
import { ILabelState } from "../interfaces/ILabelState";
import "./../../style/label.scss";

export default class Label extends React.Component<ILabelProps, ILabelState> {
    constructor(props: ILabelProps) {
        super(props);
        this.state = {
            value: props.value
        };
    }

    public render(): JSX.Element {
        return (
            <div className="lbl" >{this.state.value}</div>
        );
    }

    public componentDidUpdate(prevProps: ILabelProps): void {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value });
        }
    }
}