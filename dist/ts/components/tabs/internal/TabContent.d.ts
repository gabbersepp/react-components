import * as React from "react";
export default class TabContent extends React.Component<ITabContentProps, ITabContentState> {
    render(): JSX.Element;
}
interface ITabContentProps {
    active?: boolean;
    element?: React.ReactElement;
    children?: React.ReactElement | React.ReactElement[];
}
interface ITabContentState {
    active: boolean;
}
export {};
