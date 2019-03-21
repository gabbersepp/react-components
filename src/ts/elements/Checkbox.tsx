import * as React from "react";
import "./../../style/checkbox.scss";
import StateUtils from "../utils/StateUtils";
import { ICheckboxProps } from "../interfaces/ICheckboxProps";
import { ICheckboxState } from "../interfaces/ICheckboxState";
// see: https://github.com/Jimdo/typings-for-css-modules-loader

export default class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
    constructor(props: ICheckboxProps) {
        super(props);
        this.state = {
            checked: props.checked,
            disabled: props.disabled
        };
    }

    public render(): JSX.Element {
        return (
            <div 
                className={`chk-box ${this.state.disabled ? 'disabled' : ''} ${this.state.checked ? 'checked' : ''} ${this.props.crossType}`} 
                onClick={() => this.onClick()}/>
        )
    }

    componentDidUpdate(prevProps: ICheckboxProps) {
        if (this.props.disabled !== prevProps.disabled || this.props.checked !== prevProps.checked) {
            this.setState({
                disabled: this.props.disabled,
                checked: this.props.checked
            });
        }
    }

    private onClick(): void {
        if (!this.state.disabled) {
            const newState: ICheckboxState = StateUtils.newFromObj(this.state);
            newState.checked = !newState.checked;
            this.setState(newState);
            
            if (this.props.onStateChange) {
                this.props.onStateChange(newState.checked);
            }
        }
    }
}

export enum CheckboxCrossTypes {
    DefaultCross = "DefaultCross",
    GreenHook = "GreenHook"
}