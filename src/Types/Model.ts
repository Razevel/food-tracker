type Data = Record<string, any>;

export interface IModelOptions {
    idProperty: string
    data?: Data
}


export class Model {
    
    private readonly _idProperty: string;
    private _data: Data;
    
    
    private _$hasMultiLevel: boolean = false;
    
    constructor(cfg: IModelOptions) {
        this._idProperty = cfg.idProperty;
        this._data = cfg.data || {};
        
        this._$hasMultiLevel = this.__checkHasMultilevel(this._data);
    }
    
    private __checkHasMultilevel(data: Data): boolean {
        for (let key in data) {
            const value = data[key];
            
            // TODO Разобраться, чё ему не нравится.
            // @ts-ignore
            if (typeof value === "object" || value instanceof Array) {
                return true;
            }
        }
        return false
    }
    
    getId<T = any>(): T {
        return <T>this._data[this._idProperty];
    }
    
    get<T = any>(propertyName: string): T {
        if (this._$hasMultiLevel) {
            return this._getDeepPropertyValue<T>(propertyName);
        } else {
            return <T>this._data[propertyName];
        }
    }
    
    
    private _getDeepPropertyValue<T>(propertyName: string): T {
        // TODO Реализовать.
        return <T><unknown>null;
    }
}

export default Model;