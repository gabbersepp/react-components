import * as React from "react";
import "./../../../style/messagebox.scss";
import { IMsgBoxButton } from "./IMsgBoxButton";
export declare function showOkCancel(title: string, msg: string): Promise<boolean>;
export default class MessageBox extends React.Component<{}, IMessageBoxState> {
    constructor(props: {});
    hide(): void;
    show(title: string, msg: string, buttons: IMsgBoxButton[]): void;
    render(): JSX.Element;
}
export interface IMessageBoxState {
    show: boolean;
    title: string;
    msg: string;
    buttons: IMsgBoxButton[];
}
