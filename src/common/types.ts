export type Product = {
  max: number;
  min: number;
  name: string;
  pid: string;
  price: string;
  quantity: number;
  isBlocked?: boolean;
};

export interface CartState {
  [field: string]: any;
  products: Product[];
  isLoading: boolean;
  error: object;
}

export const errorTypes = {
  INCORRECT_BODY: "INCORRECT_BODY",
  INCORRECT_TYPE: "INCORRECT_TYPE",
  MISSING_PROPERTY: "MISSING_PROPERTY",
  NOT_FOUND: "NOT_FOUND",
  INCORRECT_QUANTITY: "INCORRECT_QUANTITY",
};
