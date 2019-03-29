interface IToasterState {
    show: boolean;
    message: string;
    type: "error" | "info" | "success" | null;
    fadeOut: boolean;
} 