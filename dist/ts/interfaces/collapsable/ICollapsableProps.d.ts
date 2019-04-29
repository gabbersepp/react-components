/// <reference types="react" />
export default interface ICollapsableProps {
    children: React.ReactElement[];
    className?: string;
    collapsed?: boolean;
    keepOpen?: boolean;
}
