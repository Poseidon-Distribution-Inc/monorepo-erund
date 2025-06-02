export interface IEventBroadcastSchema {
    event: string;
    sourceId?: string;
    targetId?: string;
    documentId: string;
}
export interface IEventBroadcast extends IEventBroadcastSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
