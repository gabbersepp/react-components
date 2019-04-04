import * as React from "react";
import { ISelectProps } from "../interfaces/ISelectProps";
import "./../../style/select.scss";
import { ISelectState } from "../interfaces/ISelectState";
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
