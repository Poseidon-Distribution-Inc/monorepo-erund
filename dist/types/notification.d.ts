import { biddingStatusEnum } from './bidding';
export type NotificationType = 'bidding' | 'message' | 'post_status' | 'system';
export interface INotificationSchema {
    _id: string;
    userId: string;
    title: string;
    message: string;
    type: NotificationType;
    isRead: boolean;
    createdAt: Date;
    updatedAt: Date;
    biddingId?: string;
    biddingStatus?: biddingStatusEnum;
    postId?: string;
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
export declare const isBiddingNotification: (notification: INotificationSchema) => boolean;
export declare const isMessageNotification: (notification: INotificationSchema) => boolean;
export declare const isPostStatusNotification: (notification: INotificationSchema) => boolean;
