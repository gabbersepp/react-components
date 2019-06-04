import * as React from "react";
import Input from "./Input";
import ISelectProps from "../interfaces/ISelectProps";
import ISelectItem from "../interfaces/ISelectItem";
import StateUtils from "../utils/StateUtils";
import "./../../style/select.scss";

export default class Select extends React.Component<ISelectProps, ISelectState> {

    constructor(props: ISelectProps) {
        super(props);
        this.state = {
            selectedKey: props.selectedKey || "",
            filtered: [].concat(props.options || []),
            options: [].concat(props.options || []),
            dropDownOpened: false,
            isValid: props.validator ? props.validator(props.selectedKey || "") : true
        }
        this.fetchBlur = this.fetchBlur.bind(this);
        this.selectRef = React.createRef();
    }

    private selectRef: any;

    public render(): JSX.Element {
        return (
                <div className={`select ${this.props.className || ""} ${!this.state.isValid ? "select--invalid" : ""}`} ref={this.selectRef}>
                <Input onFocus={() => this.openDropdown()} value={this.getValue(this.state.selectedKey)} onChange={(val) => this.filter(val)}/>
                <div className={`select-results ${this.state.dropDownOpened ? "select-results--open" : ""}`}>
                    {this.state.filtered.filter(x => x.key).map(i => (<div tabIndex={0} className="select-item" key={i.key} onClick={(e) => this.select(i, e.currentTarget)}>{i.value}</div>))}
                </div>
            </div>
        )
    }

    private fetchBlur(e: MouseEvent): void {
        if (this.state.dropDownOpened) {// && target.className.indexOf("select-item") <= -1) {
            let el: any = e.target;
            let found: boolean = false;

            while (el !== null) {
                if (el === this.selectRef.current) {
                    found = true;
                    break;
                }

                el = el.parentElement;
            }

            if (!found) {
                this.closeDropdown();
            }
        }
    }

    public componentDidMount() {
        document.addEventListener("click", this.fetchBlur);
    }

    public componentWillUnmount() {
        document.removeEventListener("click", this.fetchBlur);
    }

    public componentDidUpdate(prevProps: ISelectProps) {
        if (prevProps.options !== this.props.options ||
                prevProps.options.length !== this.props.options.length) {
            const newState: ISelectState = StateUtils.newFromObj(this.state);
            newState.options = [].concat(this.props.options);
            newState.filtered = [].concat(this.props.options);
            this.setState(newState);
        }
    }

    private closeDropdown(state?: ISelectState): void {
        state = state || StateUtils.newFromObj(this.state);
        state.dropDownOpened = false;
        this.setState(state);
    }

    private openDropdown(): void {
        const newState = StateUtils.setProp(this.state, "dropDownOpened", true);
        this.setState(newState);
    }

    private select(item: ISelectItem, e: HTMLDivElement): void {
        let newState: ISelectState = StateUtils.newFromObj(this.state);
        newState.isValid = true;

        if (this.props.validator) {
            newState.isValid = this.props.validator(item ? item.key : "");
        }

        this.props.onChange(item);
        newState.selectedKey = item.key;
        this.closeDropdown(newState);
    }

    private getValue(key: string): string {
        const item: ISelectItem = this.state.options.find(x => x.key === key);

        if (item) {
            return item.value;
        }

        return undefined;
    }

    private filter(val: string) {
        let items: ISelectItem[];

        if (val && val !== "") {
            items = this.state.options.filter(x => x.value.indexOf(val) > -1);
        } else {
            items = [].concat(this.state.options);
        }

        if (this.props.adjustFiltered) {
            items = this.props.adjustFiltered(items, val);
        }

        const newState: ISelectState = StateUtils.newFromObj(this.state);
        newState.filtered = items;
        this.setState(newState);
    }
}

export interface ISelectState {
    selectedKey: string;
    filtered: ISelectItem[];
    options: ISelectItem[];
    dropDownOpened: boolean;
    isValid: boolean;
}