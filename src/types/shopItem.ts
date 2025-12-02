export interface IShopItemVariant {
  name: string; // e.g., "Red / L"
  price?: number;
  stock?: number;
}

export interface IShopItemSchema {
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

export interface IShopItem extends IShopItemSchema {
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
  item: IShopItem;
}

export interface APIGetShopItemsResponse {
  items: IShopItem[];
}
