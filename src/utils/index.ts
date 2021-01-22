import { Product } from "common/types";

export const formatPrice = (price: string): string => price.replace(".", ",");

export const getProductIndex = (array: Product[], id: string): number =>
  array.findIndex((x) => x.pid === id);
