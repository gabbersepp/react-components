import * as React from "react";
import "./../style/checkbox.scss";
import ICheckboxProps from "../interfaces/ICheckboxProps";
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
                className={`chk-box ${this.state.disabled ? 'chk-box--disabled' : ''} ${this.state.checked ? 'chk-box--checked' : ''} ${this.props.crossType || CheckboxCrossTypes.DefaultCross}`} 
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
            let checked: boolean = !this.state.checked;
            this.setState({
                checked: checked
            });
            
            if (this.props.onStateChange) {
                this.props.onStateChange(checked);
            }
        }
    }
}

export enum CheckboxCrossTypes {
    DefaultCross = "DefaultCross",
    GreenHook = "GreenHook"
}

interface ICheckboxState {
    checked: boolean;
    disabled: boolean;
}