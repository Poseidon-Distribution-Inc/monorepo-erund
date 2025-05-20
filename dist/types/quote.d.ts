export interface IQuoteSchema {
    price: number;
    currency: string;
    authorId: string;
    postId: string;
    isActive: boolean;
    isAccepted: boolean;
}
export interface IQuote extends IQuoteSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface APIQuoteErrorResponse {
    error: string;
}
interface APIQuoteSuccessResponse {
    message: string;
    data: IQuote | IQuote[];
}
export type APIQuoteResponse = APIQuoteSuccessResponse | APIQuoteErrorResponse;
export interface APICreateQuoteRequest {
    quote: IQuoteSchema;
}
export interface APIUpdateQuoteRequest {
    quote: Partial<IQuoteSchema>;
}
export {};
