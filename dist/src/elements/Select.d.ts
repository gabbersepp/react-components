import * as React from "react";
import ISelectProps from "../interfaces/ISelectProps";
import ISelectItem from "../interfaces/ISelectItem";
import "./../style/select.scss";
export default class Select extends React.Component<ISelectProps, ISelectState> {
    constructor(props: ISelectProps);
    private selectRef;
    render(): JSX.Element;
    private fetchBlur;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: ISelectProps): void;
    private closeDropdown;
    private openDropdown;
    private select;
    private getValue;
    private filter;
}
export interface ISelectState {
    selectedKey: string;
    filtered: ISelectItem[];
    options: ISelectItem[];
    dropDownOpened: boolean;
    isValid: boolean;
}
