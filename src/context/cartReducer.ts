import { Draft } from "immer";

import { getProductIndex } from "utils";
import { CartState } from "common/types";

export type Reducer = {
  type: string;
  payload: any;
  field: string;
};

export const reducer = (
  draft: Draft<CartState>,
  { type, payload, field }: Reducer
) => {
  switch (type) {
    case "handleState": {
      draft[field] = payload;
      return;
    }

    case "productIncrement": {
      draft.products[getProductIndex(draft.products, payload)].quantity++;
      return;
    }

    case "productDecrement": {
      draft.products[getProductIndex(draft.products, payload)].quantity--;
      return;
    }

    case "resetQuantity": {
      draft.products[getProductIndex(draft.products, payload)].quantity = 0;
      return;
    }

    default:
      return;
  }
};
