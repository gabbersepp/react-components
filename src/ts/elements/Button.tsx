import * as React from "react";
import { IButtonProps } from "../interfaces/IButtonProps";
import "./../../style/button.scss";

export default class Button extends React.Component<IButtonProps, IButtonState> {
    constructor(props: IButtonProps) {
        super(props);
        this.state = {
            disabled: props.disabled
        }
    }

    render(): JSX.Element {
        return (
            <div className={`btn ${this.props.type || "default"}`} onClick={() => this.onClick()}>{this.props.title}</div>
        )
    }

    private onClick(): void {
        if (!this.state.disabled) {
            this.props.onClick();
        }
    }
}