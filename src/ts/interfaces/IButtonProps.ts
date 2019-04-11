export default interface IButtonProps {
    title: string;
    disabled?: boolean;
    onClick: () => void;
    type?: "default" | "important";
}