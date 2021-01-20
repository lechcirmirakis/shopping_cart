export type Product = {};

export interface CartState {
  [field: string]: any;
  products: Product[];
}
