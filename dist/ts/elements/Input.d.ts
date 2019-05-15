import * as React from "react";
import IInputProps from "../interfaces/IInputProps";
import "./../../style/input.scss";
export default class Input extends React.Component<IInputProps, IInputState> {
    constructor(props: IInputProps);
    render(): JSX.Element;
    componentDidUpdate(prevProps: IInputProps): void;
    private onChange;
}
interface IInputState {
    value: string;
    isValid: boolean;
}
export {};
