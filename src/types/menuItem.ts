export interface IMenuItemAddon {
  name: string;
  price?: number;
}

export interface IMenuItem {
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

export interface IMenuItemWithId extends IMenuItem {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// API interfaces
export interface APICreateMenuItemRequest {
  item: IMenuItem;
}

export interface APIUpdateMenuItemRequest {
  itemId: string;
  updates: Partial<IMenuItem>;
}

export interface APIGetMenuItemResponse {
  item: IMenuItemWithId;
}

export interface APIGetMenuItemsResponse {
  items: IMenuItemWithId[];
}

export interface APIErrorResponse {
  error: string;
}
