import * as React from "react";
import "./../../style/toaster.scss";
export declare function success(msg: string): void;
export declare function error(msg: string): void;
export default class Toaster extends React.Component<{}, IToasterState> {
    constructor(props: {});
    private timeoutHandles;
    render(): JSX.Element;
    show(msg: string, type: "error" | "info" | "success"): void;
    componentWillUnmount(): void;
    private disposeEvents;
    private triggerFadeOut;
    private triggerDisable;
}
interface IToasterState {
    show: boolean;
    message: string;
    type: "error" | "info" | "success" | null;
    fadeOut: boolean;
}
export {};
