import * as React from "react";
import { IInputProps } from "../interfaces/IInputProps";
import "./../../style/input.scss";

export default class Input extends React.Component<IInputProps, IInputState> {
    constructor(props: IInputProps) {
        super(props);

        this.state = {
            value: props.value || ""
        }
    }

    public render(): JSX.Element {
        return (
            <input 
                placeholder={this.props.placeholder} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onChange(e.currentTarget.value)}
                value={this.state.value}
                onFocus={() => this.props.onFocus ? this.props.onFocus() : null}
                className="input"
            />
        );
    }

    public componentDidUpdate(prevProps: IInputProps): void {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value });
        }
    }

    private onChange(val: string) {
        this.setState({ value: val });
        
        if (this.props.onChange) {
            this.props.onChange(val);
        }
    }
}