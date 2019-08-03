// class RecordClassList {
//     private _classListObject: Record<string, boolean>;
//     private _classCount: number = 0;
//
//     constructor(classList: Record<string, boolean> = {}) {
//         this._classListObject = classList;
//     }
//
//     push(className: string, shouldAdd: boolean): number {
//         this._classListObject[className.trim()] = shouldAdd;
//         return ++this._classCount;
//     }
//
//     pop(): number {
//         const keys = Object.keys(this._classListObject);
//         delete this._classListObject[keys[keys.length - 1]];
//         return --this._classCount;
//     }
//
//     remove(className: string): number {
//         delete this._classListObject[className];
//         return --this._classCount;
//     }
//
//     activate(className: string): void {
//         this._classListObject[className] = true;
//     }
//
//
//     deactivate(className: string): void {
//         this._classListObject[className] = false;
//     }
//
// }
//
//
// export default class ClassList<T = Record<string, boolean> | string> {
//
//     private _classListObject: T;
//
//     constructor(classListObject: T) {
//         this._classListObject = classListObject;
//     }
//
//     push(className: T) {
//
//     }
//
//     private classListIsString(classListObject: string | Record<string, boolean>): classListObject is string {
//         return typeof classListObject === "string";
//     }
// }
