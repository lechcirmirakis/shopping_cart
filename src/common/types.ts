export type Product = {
  max: number;
  min: number;
  name: string;
  pid: string;
  price: string;
  quantity: number;
};

export interface CartState {
  [field: string]: any;
  products: Product[];
}
