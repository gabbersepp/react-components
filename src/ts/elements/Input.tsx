import * as React from "react";

export default class Input extends React.Component<IInputProps, IInputState> {
    constructor(props: IInputProps) {
        super(props);

        this.state = {
            value: props.value
        }
    }

    public render(): JSX.Element {
        return (
            <input 
                placeholder={this.props.placeholder} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onChange(e.currentTarget.value)}
                value={this.state.value}
            />
        );
    }

    private onChange(val: string) {
        this.setState({ value: val });
        
        if (this.props.onChange) {
            this.props.onChange(val);
        }
    }
}