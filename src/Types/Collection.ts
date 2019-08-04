import Model from "@/Types/Model";


export interface CollectionItem {
    index: number
    content: Model
    key: string
}

export interface CollectionOptions {
    idProperty: string,
    data: Array<object>
}

class Collection {
    
    private _idProperty: string;
    private _items: Array<CollectionItem> = [];
    private _itemsCount: number = 0;
    
    constructor(cfg: CollectionOptions) {
        debugger;
        this._idProperty = cfg.idProperty;
        
        cfg.data.forEach((item) => {
            this._items.push(this.__prepareItem(new Model({
                idProperty: cfg.idProperty,
                data: item
            })));
            this._itemsCount++;
        });
    }
    
    private __prepareItem(item: Model): CollectionItem {
        return {
            index: this._itemsCount,
            content: item,
            key: item.get(this._idProperty)
        }
    }
}

export default Collection