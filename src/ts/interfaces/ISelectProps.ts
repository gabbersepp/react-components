import ISelectItem from "./ISelectItem";

export default interface ISelectProps {
    selectedKey?: string;
    options: ISelectItem[];
    onChange: (selected: ISelectItem) => void;
    className?: string;
    validator?: (val: string) => boolean;
    adjustFiltered?: (items: ISelectItem[], val: string) => ISelectItem[];
}