import * as React from "react";
import IButtonProps from "../interfaces/IButtonProps";
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
            <div className={`btn btn--${this.props.type || "default"} ${this.state.disabled ? "btn--disabled" : ""}`} onClick={() => this.onClick()}>{this.props.title}</div>
        )
    }

    private onClick(): void {
        if (!this.state.disabled) {
            this.props.onClick();
        }
    }

    public componentDidUpdate(prevProps: IButtonProps): void {
        if (this.props.disabled !== prevProps.disabled) {
            this.setState({
                disabled: this.props.disabled
            });
        }
    }
}

interface IButtonState {
    disabled?: boolean;
}