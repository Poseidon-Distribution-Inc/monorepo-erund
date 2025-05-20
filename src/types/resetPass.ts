export interface IResetPassSchema {
  token: string;
  password: string;
  isActive: boolean;
}

export interface IResetPass extends IResetPassSchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface APIResetPassErrorResponse {
  error: string;
}

interface APIResetPassSuccessResponse {
  message: string;
}

export type APIResetPassResponse =
  | APIResetPassSuccessResponse
  | APIResetPassErrorResponse;

export interface APIResetPassRequest {
  newPassword: string;
}
