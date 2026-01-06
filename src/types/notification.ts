import { biddingStatusEnum } from "./bidding";
export type NotificationType = "bidding" | "message" | "post_status" | "system" | "task_progress" | "booking";
type NotifTitle =
    | "new_post"
    | "post_accepted"
    | "post_completed"
    | "post_completion_verified"
    | "task_progress_updated"
    | "new_message"
    | "post_auto_cancelled"
    | "pickup_received"
    | "arrived"
    | "new_proposed_rate"
    | "rate_updated"
    | "rate_cancelled"
    | "rate_accepted"
    | "new_booking"
    | "booking_declined";
export interface INotificationSchema {
    _id?: string;
    userId: string;
    title: NotifTitle;
    message: string;
    notifType: NotificationType;
    isRead?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    biddingId?: string;
    biddingStatus?: biddingStatusEnum;
    postId?: string;
    postStatus?: string;
    bidderId?: string;
    bidderName?: string;
    biddingAmount?: string;
    conversationId?: string;
    senderId?: string;
    senderName?: string;
    messagePreview?: string;
    previousStatus?: string;
    newStatus?: string;
}
export declare const isBiddingNotification: (
    notification: INotificationSchema
) => boolean;
export declare const isMessageNotification: (
    notification: INotificationSchema
) => boolean;
export declare const isPostStatusNotification: (
    notification: INotificationSchema
) => boolean;
