import * as React from "react";
import { IMessageBoxState } from "../../interfaces/IMessageBoxState";
import StateUtils from "../../utils/StateUtils";
import Overlay from "../../elements/Overlay";
import "./../../../style/messagebox.scss";
import { IMsgBoxButton } from "./IMsgBoxButton";
import Button from "./../../elements/Button";

let instance: MessageBox = null;
const okCancelBtns: IMsgBoxButton[] = [{ title: "OK", onClick: null}, { title: "Abbrechen", onClick: null }];

export function showOkCancel(title: string, msg: string): Promise<void> {
    return new Promise((resolve: () => void, reject: () => void) => {
        okCancelBtns[0].onClick = () => {
            resolve();
            instance.hide();
        };
        okCancelBtns[1].onClick = () => {
            reject();
            instance.hide();
        };
        instance.show(title, msg, okCancelBtns);
    });
}

export default class MessageBox extends React.Component<{}, IMessageBoxState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            show: false,
            title: "",
            msg: "",
            buttons: []
        }
        instance = this;
    }

    public hide(): void {
        const newObj: IMessageBoxState = StateUtils.newFromObj(this.state);
        newObj.show = false;
        this.setState(newObj);
    }

    public show(title: string, msg: string, buttons: IMsgBoxButton[]): void {
        const newObj: IMessageBoxState = StateUtils.newFromObj(this.state);
        newObj.title = title;
        newObj.msg = msg;
        newObj.show = true;
        newObj.buttons = buttons;
        this.setState(newObj);
    }

    public render(): JSX.Element {
        const html: JSX.Element = (
            <Overlay>
                <div className="msg-box">
                    <div className="msg-box-title">{this.state.title}</div>
                    <div className="msg-box-msg">{this.state.msg}</div>
                    <div className="msg-box-buttons">
                        {this.state.buttons.map(b => (<Button key={b.title} onClick={b.onClick} title={b.title}/>))}
                    </div>
                </div>
            </Overlay>
        );

        return this.state.show ? html : null;
    }
}