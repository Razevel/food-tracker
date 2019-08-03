import { IButton } from "@/components/Button/interface/IButton";

export interface IButtonEventHandlers {
    buttonClick?(e: MouseEvent, button: IButton): void
}