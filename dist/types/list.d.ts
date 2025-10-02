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
interface APIListingErrorResponse {
    error: string;
}
interface APIListingSuccessResponse {
    mesage: string;
    data: IListing | IListing[];
}
export type APIListingResponse = APIListingSuccessResponse | APIListingErrorResponse;
export interface APICreateListingRequest {
    listings: IListing;
}
export interface APIUpdateListingRequest {
    listing: Partial<IListing>;
}
export {};
