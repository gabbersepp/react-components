import { CheckboxCrossTypes } from "../elements/Checkbox";

export default interface ICheckboxProps {
    onStateChange?: (checked: boolean) => void;
    checked?: boolean;
    disabled?: boolean;
    crossType?: CheckboxCrossTypes
}