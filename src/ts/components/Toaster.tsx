import * as React from "react";
import If from "./../elements/If";
import "./../../style/toaster.scss";
import StateUtils from "../utils/StateUtils";
import eventQueue from "./../utils/EventQueue";

let instance: Toaster = null;

export function success(msg: string) {
    instance.show(msg, "success");
}

export function error(msg: string) {
    instance.show(msg, "error");
}

export default class Toaster extends React.Component<{}, IToasterState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            show: false,
            message: "",
            type: null,
            fadeOut: false
        }
        instance = this;
        this.triggerDisable = this.triggerDisable.bind(this);
        this.triggerFadeOut = this.triggerFadeOut.bind(this);
    }

    private timeoutHandles: number[] = [];

    public render(): JSX.Element {
        return (
            <If expression={this.state.show}>
                <div className={`message ${this.state.fadeOut ? "message--fade-out" : ""}`}>
                    <div className={`message--${this.state.type}`}>
                        {this.state.message}
                    </div>
                </div>
            </If>
        )
    }

    public show(msg: string, type: "error" | "info" | "success"): void {
        if (this.timeoutHandles.length > 0) {
            this.timeoutHandles.forEach(t => clearTimeout(t));
            this.timeoutHandles.length = 0;
        }

        this.setState({
            fadeOut: false,
            show: true,
            message: msg,
            type: type
        });

        this.disposeEvents();
        eventQueue.queue(this.triggerFadeOut, 2000);
    }

    public componentWillUnmount() {
        this.disposeEvents();
    }

    private disposeEvents() {
        eventQueue.clear(this.triggerDisable);
        eventQueue.clear(this.triggerFadeOut);
    }

    private triggerFadeOut(): void {
        const newState: IToasterState = StateUtils.setProp(this.state, "fadeOut", true);
        this.setState(newState);
        eventQueue.queue(this.triggerDisable, 2000);
    }

    private triggerDisable(): void {
        this.setState({ show: false });
    }
}

interface IToasterState {
    show: boolean;
    message: string;
    type: "error" | "info" | "success" | null;
    fadeOut: boolean;
} 