/// <reference types="react" />
export default interface IOverlayProps {
    children: JSX.Element | JSX.Element[] | string;
    onClick?: () => void;
}
