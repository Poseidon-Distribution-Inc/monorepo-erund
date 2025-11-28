export interface IShopItemVariant {
  name: string; // e.g., "Red / L"
  price?: number;
  stock?: number;
}

export interface IShopItem {
  partnerId: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  variants?: IShopItemVariant[];
  stock?: number;
  availability: boolean;
  category?: string;
  isActive: boolean;
}

export interface IShopItemWithId extends IShopItem {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// API interfaces
export interface APICreateShopItemRequest {
  item: IShopItem;
}

export interface APIUpdateShopItemRequest {
  itemId: string;
  updates: Partial<IShopItem>;
}

export interface APIGetShopItemResponse {
  item: IShopItemWithId;
}

export interface APIGetShopItemsResponse {
  items: IShopItemWithId[];
}
