import * as React from "react";
import { IMessageBoxState } from "../../interfaces/IMessageBoxState";
import "./../../../style/messagebox.scss";
import { IMsgBoxButton } from "./IMsgBoxButton";
export declare function showOkCancel(title: string, msg: string): Promise<void>;
export default class MessageBox extends React.Component<{}, IMessageBoxState> {
    constructor(props: {});
    hide(): void;
    show(title: string, msg: string, buttons: IMsgBoxButton[]): void;
    render(): JSX.Element;
}
