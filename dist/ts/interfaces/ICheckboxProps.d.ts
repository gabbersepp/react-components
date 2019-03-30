import { CheckboxCrossTypes } from "../elements/Checkbox";
export interface ICheckboxProps {
    onStateChange?: (checked: boolean) => void;
    checked?: boolean;
    disabled?: boolean;
    crossType?: CheckboxCrossTypes;
}
