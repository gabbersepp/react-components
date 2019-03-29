import * as React from "react";
import { ISelectProps } from "../interfaces/ISelectProps";
import "./../../style/select.scss";
import { ISelectState } from "../interfaces/ISelectState";
export default class Select extends React.Component<ISelectProps, ISelectState> {
    constructor(props: ISelectProps);
    render(): JSX.Element;
    componentDidUpdate(prevProps: ISelectProps): void;
    private openDropdown;
    private closeDropdown;
    private select;
    private getValue;
    private filter;
}
