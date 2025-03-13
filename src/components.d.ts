/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AddingItems {
    }
    interface AlertButton {
        "message": string;
    }
    interface NavBar {
        "linkHoverColor": string;
        "linkOne": string;
        "linkThree": string;
        "linkTwo": string;
    }
    interface StandardText {
    }
}
export interface AlertButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAlertButtonElement;
}
declare global {
    interface HTMLAddingItemsElement extends Components.AddingItems, HTMLStencilElement {
    }
    var HTMLAddingItemsElement: {
        prototype: HTMLAddingItemsElement;
        new (): HTMLAddingItemsElement;
    };
    interface HTMLAlertButtonElementEventMap {
        "showAlert": any;
    }
    interface HTMLAlertButtonElement extends Components.AlertButton, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAlertButtonElementEventMap>(type: K, listener: (this: HTMLAlertButtonElement, ev: AlertButtonCustomEvent<HTMLAlertButtonElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAlertButtonElementEventMap>(type: K, listener: (this: HTMLAlertButtonElement, ev: AlertButtonCustomEvent<HTMLAlertButtonElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLAlertButtonElement: {
        prototype: HTMLAlertButtonElement;
        new (): HTMLAlertButtonElement;
    };
    interface HTMLNavBarElement extends Components.NavBar, HTMLStencilElement {
    }
    var HTMLNavBarElement: {
        prototype: HTMLNavBarElement;
        new (): HTMLNavBarElement;
    };
    interface HTMLStandardTextElement extends Components.StandardText, HTMLStencilElement {
    }
    var HTMLStandardTextElement: {
        prototype: HTMLStandardTextElement;
        new (): HTMLStandardTextElement;
    };
    interface HTMLElementTagNameMap {
        "adding-items": HTMLAddingItemsElement;
        "alert-button": HTMLAlertButtonElement;
        "nav-bar": HTMLNavBarElement;
        "standard-text": HTMLStandardTextElement;
    }
}
declare namespace LocalJSX {
    interface AddingItems {
    }
    interface AlertButton {
        "message"?: string;
        "onShowAlert"?: (event: AlertButtonCustomEvent<any>) => void;
    }
    interface NavBar {
        "linkHoverColor"?: string;
        "linkOne"?: string;
        "linkThree"?: string;
        "linkTwo"?: string;
    }
    interface StandardText {
    }
    interface IntrinsicElements {
        "adding-items": AddingItems;
        "alert-button": AlertButton;
        "nav-bar": NavBar;
        "standard-text": StandardText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "adding-items": LocalJSX.AddingItems & JSXBase.HTMLAttributes<HTMLAddingItemsElement>;
            "alert-button": LocalJSX.AlertButton & JSXBase.HTMLAttributes<HTMLAlertButtonElement>;
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
            "standard-text": LocalJSX.StandardText & JSXBase.HTMLAttributes<HTMLStandardTextElement>;
        }
    }
}
