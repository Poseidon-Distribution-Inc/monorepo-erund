export interface IShopItemVariant {
    name: string;
    price?: number;
    stock?: number;
}

export interface IShopAddOns {
    name: string;
    price: number;
    imageUrl?: string;
    isAvailable: Boolean;
}

export interface IShopItemSchema {
    partnerId: string;
    type: string;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    variants?: IShopItemVariant[];
    stock?: number;
    addOns: IShopAddOns[];
    availability: boolean;
    category?: string;
    isActive: boolean;
}
export interface IShopItem extends IShopItemSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface APICreateShopItemRequest {
    item: IShopItem;
}
export interface APIUpdateShopItemRequest {
    itemId: string;
    updates: Partial<IShopItem>;
}
export interface APIGetShopItemResponse {
    item: IShopItem;
}
export interface APIGetShopItemsResponse {
    items: IShopItem[];
}

export interface IShopData {
    id: string,
    owner: string,
    name: string,
    rate: number,
    timeOperate: string,
    category: string,
    coverPhoto: string,
    countOfRater: number
}

export interface IItem {
    id: string,
    name: string,
    price: number,
    itemCategory: string,
    stock: number,
    itemPhoto: string,
    description: string,
    rate: number,
    countOfRater: number,
    variant?: IShopItemVariant[]
}

export interface IShop extends IShopData {
    address: string,
    categories: string[],
    item: IItem[] 
}