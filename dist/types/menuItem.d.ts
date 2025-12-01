export interface IMenuItemAddon {
    name: string;
    price?: number;
}
export interface IMenuItemSchema {
    partnerId: string;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    addons?: IMenuItemAddon[];
    availability: boolean;
    category?: string;
    isActive: boolean;
}
export interface IMenuItem extends IMenuItemSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface APICreateMenuItemRequest {
    item: IMenuItem;
}
export interface APIUpdateMenuItemRequest {
    itemId: string;
    updates: Partial<IMenuItem>;
}
export interface APIGetMenuItemResponse {
    item: IMenuItem;
}
export interface APIGetMenuItemsResponse {
    items: IMenuItem[];
}
