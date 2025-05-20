export type referenceEnum = "user" | "post" | "payment";
export type statusEnum = "open" | "assigned" | "processing" | "closed";
export interface IFeedbackSchema {
    authorId: string;
    title: string;
    feedback: string;
    reference: referenceEnum;
    referenceId: string;
    status: statusEnum;
    isActive: boolean;
}
export interface IFeedback extends IFeedbackSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface APIFeedbackErrorResponse {
    error: string;
}
interface APIFeedbackSuccessResponse {
    message: string;
    data: IFeedback | IFeedback[];
}
export type APIFeedbackResponse = APIFeedbackSuccessResponse | APIFeedbackErrorResponse;
export interface APICreateFeedbackRequest {
    feedbacks: IFeedback;
}
export interface APIUpdateFeedbackRequest {
    feedback: Partial<IFeedback>;
}
export {};
