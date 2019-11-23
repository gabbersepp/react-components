// index-bundle must be .ts to force tsc to create a definition file!

// components
import MessageBox, { showOkCancel, show } from "./components/messageBox/MessageBox";
import Toaster, { success, error } from "./components/Toaster";
import Tabs from "./components/tabs/Tabs";
import Tab from "./components/tabs/external/Tab";
import TabHeader from "./components/tabs/external/TabHeader";
import TabContent from "./components/tabs/external/TabContent";
import Collapsable from "./components/collapsable/Collapsable";
import CollapsableHeader from "./components/collapsable/CollapsableHeader";
import CollapsableContent from "./components/collapsable/CollapsableContent";


// elements
import Button from "./elements/Button";
import Checkbox, { CheckboxCrossTypes } from "./elements/Checkbox";
import FileInput from "./elements/FileInput";
import If from "./elements/If";
import Input from "./elements/Input";
import Label from "./elements/Label";
import Overlay from "./elements/Overlay";
import Select from "./elements/Select";
import Thumbnail from "./elements/Thumbnail";
import Group from "./components/Group";

//import { IIfProps } from "./interfaces/IIfProps";
import IButtonProps from "./interfaces/IButtonProps";
import ICheckboxProps from "./interfaces/ICheckboxProps";
import IFileUploadProps from "./interfaces/IFileUploadProps";
import IIfProps from "./interfaces/IIfProps";
import IInputProps from "./interfaces/IInputProps";
import ILabelProps from "./interfaces/ILabelProps";
import IOverlayProps from "./interfaces/IOverlayProps";
import ISelectItem from "./interfaces/ISelectItem";
import ISelectProps from "./interfaces/ISelectProps";
import IThumbnailProps from "./interfaces/IThumbnailProps";
import ITabsProps from "./interfaces/tabs/ITabsProps";
import ITabProps from "./interfaces/tabs/ITabProps";
import ITabHeaderProps from "./interfaces/tabs/ITabHeaderProps";
import ITabContentProps from "./interfaces/tabs/ITabContentProps";
import ITab from "./interfaces/tabs/ITab";
import IGroupProps from "./interfaces/IGroupProps";
import ICollapsableProps from "./interfaces/collapsable/ICollapsableProps";
import ICollapsableHeaderProps from "./interfaces/collapsable/ICollapsableHeaderProps";
import ICollapsableContentProps from "./interfaces/collapsable/ICollapsableContentProps";

const toaster = {
    success, error
}

const messageBox = {
    showOkCancel,
    show
}

export {
    MessageBox,
    Toaster,
    Button,
    Checkbox,
    CheckboxCrossTypes,
    FileInput,
    If,
    Input,
    Label,
    Overlay,
    Select,
    Thumbnail,
    Tabs,
    Tab,
    TabHeader,
    TabContent,
    Group,
    Collapsable,
    CollapsableHeader,
    CollapsableContent,

    IButtonProps,
    ICheckboxProps,
    IFileUploadProps,
    IIfProps,
    IInputProps,
    ILabelProps,
    IOverlayProps,
    ISelectItem,
    ISelectProps,
    IThumbnailProps,
    ITabsProps,
    ITabProps,
    ITabContentProps,
    ITabHeaderProps,
    ITab,
    IGroupProps,
    ICollapsableProps,
    ICollapsableHeaderProps,
    ICollapsableContentProps,

    toaster,
    messageBox
}