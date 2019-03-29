export interface IInputProps {
    placeholder?: string;
    value?: string;
    onChange: (val: string) => void;
    onFocus?: () => void;
}
