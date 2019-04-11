export default interface ICollapsableHeaderProps {
    children: React.ReactElement | React.ReactElement[] | string;
    collapsed?: boolean;
    onToggle?: (collapsed?: boolean) => void;
}