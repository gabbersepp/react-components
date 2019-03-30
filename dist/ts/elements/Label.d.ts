import * as React from "react";
import { ILabelProps } from "../interfaces/ILabelProps";
import "./../../style/label.scss";
export default class Label extends React.Component<ILabelProps, ILabelState> {
    constructor(props: ILabelProps);
    render(): JSX.Element;
    componentDidUpdate(prevProps: ILabelProps): void;
}
