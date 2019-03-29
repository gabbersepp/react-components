import * as React from "react";
import { IInputProps } from "../interfaces/IInputProps";
export default class Input extends React.Component<IInputProps, IInputState> {
    constructor(props: IInputProps);
    render(): JSX.Element;
    componentDidUpdate(prevProps: IInputProps): void;
    private onChange;
}
