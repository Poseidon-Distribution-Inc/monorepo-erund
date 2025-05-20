export interface ICartSchema {
  userId: string;
  postId: string;
  quantity: number;
  isActive: boolean;
}

export interface ICart extends ICartSchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface APICartErrorResponse {
  error: string;
}

interface APICartSuccessResponse {
  message: string;
  data: ICart | ICart[];
}

export type APICartResponse = APICartSuccessResponse | APICartErrorResponse;

export interface APICreateCartRequest {
  carts: ICart;
}

export interface APIUpdateCartRequest {
  cart: Partial<ICart>;
}
