import * as React from "react";

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