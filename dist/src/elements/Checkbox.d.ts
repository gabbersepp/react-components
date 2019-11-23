import * as React from "react";
import "./../style/checkbox.scss";
import ICheckboxProps from "../interfaces/ICheckboxProps";
export default class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
    constructor(props: ICheckboxProps);
    render(): JSX.Element;
    componentDidUpdate(prevProps: ICheckboxProps): void;
    private onClick;
}
export declare enum CheckboxCrossTypes {
    DefaultCross = "DefaultCross",
    GreenHook = "GreenHook"
}
interface ICheckboxState {
    checked: boolean;
    disabled: boolean;
}
export {};
