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
}
