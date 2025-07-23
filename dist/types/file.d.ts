export interface IFileBase {
    fileId: string;
    fileName: string;
    mimeType: string;
    publicLink: string;
    geotag?: {
        latitude: number;
        longitude: number;
        address?: string;
    } | null;
    createdAt: Date;
    updatedAt: Date;
}
export interface IFileSchema {
    userId: string;
    postId: string;
    fileType: "profile" | "errand" | "unsorted" | "proof";
    file: IFileBase;
}
export interface IFile extends IFileSchema {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
