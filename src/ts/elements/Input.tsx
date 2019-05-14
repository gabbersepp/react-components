import * as React from "react";
import IInputProps from "../interfaces/IInputProps";
import "./../../style/input.scss";
import StateUtils from "../utils/StateUtils";

export default class Input extends React.Component<IInputProps, IInputState> {
    constructor(props: IInputProps) {
        super(props);

        this.state = {
            value: props.value || "",
            isValid: props.validator ? props.validator(props.value || "") : true
        }
    }

    public render(): JSX.Element {
        return (
            <input 
                placeholder={this.props.placeholder} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onChange(e.currentTarget.value)}
                value={this.state.value}
                onFocus={() => this.props.onFocus ? this.props.onFocus() : null}
                className={`input ${this.props.className || ""} ${!this.state.isValid ? "input--invalid" : ""}`}
            />
        );
    }

    public componentDidUpdate(prevProps: IInputProps): void {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value });
        }
    }

    private onChange(val: string) {
        let newState: IInputState = StateUtils.newFromObj(this.state);
        newState.isValid = true;

        if (this.props.validator) {
            newState.isValid = this.props.validator(val);
        }

        this.setState(newState);
        newState.value = val;
    
        if (this.props.onChange) {
            this.props.onChange(val);
        }
    }
}

interface IInputState {
    value: string;
    isValid: boolean;
}