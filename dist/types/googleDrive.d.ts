interface IGoogleDriveErrorResponse {
    error: string;
}
interface IGoogleDriveData {
    fileId: string;
    publicLink: string;
    fileName?: string;
}
interface IGoogleDriveFilesData {
    files: {
        fileId: string;
        publicLink: string;
        fileName: string;
    }[];
}
interface IGoogleDriveSingleSuccessResponse {
    message: string;
    data: IGoogleDriveData;
}
interface IGoogleDriveMultipleSuccessResponse {
    message: string;
    data: IGoogleDriveFilesData;
}
export type IGoogleDriveSuccessResponse = IGoogleDriveSingleSuccessResponse | IGoogleDriveMultipleSuccessResponse;
export type IGoogleDriveResponse = IGoogleDriveErrorResponse | IGoogleDriveSuccessResponse;
export {};
