interface IGoogleDriveErrorResponse {
  error: string;
}

// Single file data
interface IGoogleDriveData {
  fileId: string;
  publicLink: string;
  fileName?: string;
}

// Multiple file data
interface IGoogleDriveFilesData {
  files: {
    fileId: string;
    publicLink: string;
    fileName: string;
  }[];
}

// Single file success response
interface IGoogleDriveSingleSuccessResponse {
  message: string;
  data: IGoogleDriveData;
}

// Multiple files success response
interface IGoogleDriveMultipleSuccessResponse {
  message: string;
  data: IGoogleDriveFilesData;
}

// Combined success response type
export type IGoogleDriveSuccessResponse = IGoogleDriveSingleSuccessResponse | IGoogleDriveMultipleSuccessResponse;

// General response type that can be either error or success (single/multiple)
export type IGoogleDriveResponse = IGoogleDriveErrorResponse | IGoogleDriveSuccessResponse;
