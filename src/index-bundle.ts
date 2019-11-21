// index-bundle must be .ts to force tsc to create a definition file!

// components
import MessageBox, { showOkCancel, show } from "./ts/components/messageBox/MessageBox";
import Toaster, { success, error } from "./ts/components/Toaster";
import Tabs from "./ts/components/tabs/Tabs";
import Tab from "./ts/components/tabs/external/Tab";
import TabHeader from "./ts/components/tabs/external/TabHeader";
import TabContent from "./ts/components/tabs/external/TabContent";
import Collapsable from "./ts/components/collapsable/Collapsable";
import CollapsableHeader from "./ts/components/collapsable/CollapsableHeader";
import CollapsableContent from "./ts/components/collapsable/CollapsableContent";


// elements
import Button from "./ts/elements/Button";
import Checkbox, { CheckboxCrossTypes } from "./ts/elements/Checkbox";
import FileInput from "./ts/elements/FileInput";
import If from "./ts/elements/If";
import Input from "./ts/elements/Input";
import Label from "./ts/elements/Label";
import Overlay from "./ts/elements/Overlay";
import Select from "./ts/elements/Select";
import Thumbnail from "./ts/elements/Thumbnail";
import Group from "./ts/components/Group";

//import { IIfProps } from "./ts/interfaces/IIfProps";
import IButtonProps from "./ts/interfaces/IButtonProps";
import ICheckboxProps from "./ts/interfaces/ICheckboxProps";
import IFileUploadProps from "./ts/interfaces/IFileUploadProps";
import IIfProps from "./ts/interfaces/IIfProps";
import IInputProps from "./ts/interfaces/IInputProps";
import ILabelProps from "./ts/interfaces/ILabelProps";
import IOverlayProps from "./ts/interfaces/IOverlayProps";
import ISelectItem from "./ts/interfaces/ISelectItem";
import ISelectProps from "./ts/interfaces/ISelectProps";
import IThumbnailProps from "./ts/interfaces/IThumbnailProps";
import ITabsProps from "./ts/interfaces/tabs/ITabsProps";
import ITabProps from "./ts/interfaces/tabs/ITabProps";
import ITabHeaderProps from "./ts/interfaces/tabs/ITabHeaderProps";
import ITabContentProps from "./ts/interfaces/tabs/ITabContentProps";
import ITab from "./ts/interfaces/tabs/ITab";
import IGroupProps from "./ts/interfaces/IGroupProps";
import ICollapsableProps from "./ts/interfaces/collapsable/ICollapsableProps";
import ICollapsableHeaderProps from "./ts/interfaces/collapsable/ICollapsableHeaderProps";
import ICollapsableContentProps from "./ts/interfaces/collapsable/ICollapsableContentProps";

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