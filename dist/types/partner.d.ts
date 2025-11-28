export type PartnerType = 'kitchen' | 'shop';
export interface IContactPerson {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role?: string;
}
export interface IOperatingHours {
    open: string;
    close: string;
}
export type KitchenCategory = 'Fast Food' | 'Casual Dining' | 'Fine Dining' | 'Cafe / Coffee Shop' | 'Bakery' | 'Dessert / Ice Cream' | 'Pizza' | 'Burgers' | 'Sushi / Japanese' | 'Chinese / Asian' | 'Indian' | 'Mediterranean' | 'Vegan / Healthy' | 'Street Food' | 'Other';
export type ShopCategory = 'Grocery' | 'Clothing' | 'Shoes / Accessories' | 'Electronics' | 'Books / Stationery' | 'Home & Living' | 'Beauty / Personal Care' | 'Toys / Baby' | 'Sports / Outdoors' | 'Pet Supplies' | 'Convenience Store' | 'Other';
export interface IPartnerSchema {
    type: PartnerType;
    name: string;
    description?: string;
    category?: KitchenCategory | ShopCategory;
    address?: string;
    location?: {
        lat: number;
        lng: number;
    };
    contactPerson: IContactPerson;
    logoUrl?: string;
    coverPhotoUrl?: string;
    operatingHours?: IOperatingHours;
    status: 'online' | 'offline' | 'closed' | 'paused';
    isActive: boolean;
}
export interface IPartner extends IPartnerSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface APICreatePartnerRequest {
    partner: IPartnerSchema;
}
export interface APIUpdatePartnerRequest {
    partnerId: string;
    updates: Partial<IPartnerSchema>;
}
export interface APIGetPartnerResponse {
    partner: IPartner;
}
export interface APIGetPartnersResponse {
    partners: IPartner[];
}
export interface APIErrorResponse {
    error: string;
}
