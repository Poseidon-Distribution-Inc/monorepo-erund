type ListingStatus = 'published' | 'archived';
export interface IListingSchema {
    listerId: string;
    listerName?: string;
    title: string;
    description: string;
    rate: number;
    location: {
        address: string;
        latitude?: number;
        longitude?: number;
        city?: string;
        district?: string;
        streetNumber?: string;
        street?: string;
        region?: string;
        subregion?: string;
        country?: string;
        postalCode?: string;
        name?: string;
        isoCountryCode?: string;
        timezone?: string;
        formattedAddress?: string;
    };
    status: ListingStatus;
    photos?: {
        fileId: string;
        publicLink: string;
    };
    isActive: boolean;
}
export interface IListing extends IListingSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface APIListErrorResponse {
    error: string;
}
interface APIListSuccessResponse {
    mesage: string;
    data: IListing | IListing[];
}
export type APIListResponse = APIListSuccessResponse | APIListErrorResponse;
export interface APICreateListRequest {
    listings: IListing;
}
export interface APIUpdateListRequest {
    listing: Partial<IListing>;
}
export {};
