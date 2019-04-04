import * as React from "react";
export default class TabHeader extends React.Component<ITabsHeaderProps, {}> {
    render(): JSX.Element;
}
interface ITabsHeaderProps {
    title: string;
    active?: boolean;
    disabled?: boolean;
    onClick: () => void;
    allowClose?: boolean;
}
export {};
