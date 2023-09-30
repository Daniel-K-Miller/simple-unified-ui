/// <reference types="react" />
declare const SmallButton: import("styled-components").IStyledComponent<"web", {
    className?: string | undefined;
    text: string;
    bgColor?: string | undefined;
    onClick?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
}> & import("react").FC<import("./Button.types").ButtonProps>;
declare const MediumButton: import("styled-components").IStyledComponent<"web", {
    className?: string | undefined;
    text: string;
    bgColor?: string | undefined;
    onClick?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
}> & import("react").FC<import("./Button.types").ButtonProps>;
declare const LargeButton: import("styled-components").IStyledComponent<"web", {
    className?: string | undefined;
    text: string;
    bgColor?: string | undefined;
    onClick?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
}> & import("react").FC<import("./Button.types").ButtonProps>;
export { SmallButton, MediumButton, LargeButton };
