import * as React from "react";
import ICollapsableProps from "../../interfaces/collapsable/ICollapsableProps";
import "./../../../style/collapsable.scss";
import CollapsableHeader from "./CollapsableHeader";
import ICollapsableHeaderProps from "../../interfaces/collapsable/ICollapsableHeaderProps";
import ICollapsableContentProps from "../../interfaces/collapsable/ICollapsableContentProps";
import CollapsableContent from "./CollapsableContent";
import StateUtils from "../../utils/StateUtils";

export default class Collapsable extends React.Component<ICollapsableProps, ICollapsableState> {
    constructor(props: ICollapsableProps) {
        super(props);
        this.state = {
            collapsed: props.collapsed,
            keepOpen: props.keepOpen
        }
    }
    
    public render(): JSX.Element {
        let header: React.ReactElement<ICollapsableHeaderProps> = this.props.children.find(x => x.type === CollapsableHeader);
        let content: React.ReactElement<ICollapsableContentProps> = this.props.children.find(x => x.type === CollapsableContent);

        const newHeaderProps = StateUtils.newFromObj(header.props);
        const newContentProps = StateUtils.newFromObj(content.props);
        newHeaderProps.collapsed = this.state.collapsed && !this.state.keepOpen;
        newHeaderProps.onToggle = this.onToggle.bind(this, newHeaderProps.onToggle);
        newContentProps.collapsed = this.state.collapsed && !this.state.keepOpen;
        
        header = React.cloneElement(header, newHeaderProps);            
        content = React.cloneElement(content, newContentProps);

        const children: React.ReactElement[] = [header, content];

        return (
            <div className={`collapsable ${this.props.className || ""} ${this.state.collapsed ? "collapsable--collapsed" : ""}`}>
                {children}
            </div>
        )
    }

    public componentDidUpdate(prevProps: ICollapsableProps) {
        if (prevProps.keepOpen !== this.props.keepOpen) {
            this.setState(StateUtils.setProp(this.state, "keepOpen", this.props.keepOpen));
        }
    }

    private onToggle(additionalFunction: (collapsed: boolean) => void): void {
        if (this.state.keepOpen) {
            return;
        }

        const newState: ICollapsableState = StateUtils.newFromObj(this.state);
        newState.collapsed = !newState.collapsed;
        this.setState(newState);

        if (additionalFunction) {
            additionalFunction(newState.collapsed);
        }
    }
}

interface ICollapsableState {
    collapsed: boolean;
    keepOpen: boolean;
}