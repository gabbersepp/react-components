import * as React from "react";
import IButtonProps from "../interfaces/IButtonProps";
import "./../../style/button.scss";
export default class Button extends React.Component<IButtonProps, IButtonState> {
    constructor(props: IButtonProps);
    render(): JSX.Element;
    private onClick;
}
interface IButtonState {
    disabled?: boolean;
}
export {};
