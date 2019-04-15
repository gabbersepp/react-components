import ISelectItem from "./ISelectItem";

export default interface ISelectProps {
    selectedKey?: string;
    options: ISelectItem[];
    onChange: (selected: ISelectItem) => void;
    className?: string;
}