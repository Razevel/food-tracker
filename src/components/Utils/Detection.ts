export function isTouch(): boolean {
    return "ontouchstart" in document.documentElement;
}