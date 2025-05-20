interface IGoogleDriveErrorResponse {
  error: string;
}

interface IGoogleDriveData {
  fileId: string;
  publicLink: string;
}

export interface IGoogleDriveSuccessResponse {
  message: string;
  data: IGoogleDriveData;
}

export type IGoogleDriveResponse =
  | IGoogleDriveErrorResponse
  | IGoogleDriveSuccessResponse;
