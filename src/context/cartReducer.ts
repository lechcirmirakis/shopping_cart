import { Draft } from "immer";
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
  console.log(type, payload, field);

  switch (type) {
    case "handleState": {
      draft[field] = payload;
      return;
    }

    case "productIncrement": {
      draft.products[draft.products.findIndex((x) => x.pid === payload)]
        .quantity++;
      return;
    }

    case "productDecrement": {
      draft.products[draft.products.findIndex((x) => x.pid === payload)]
        .quantity--;
      return;
    }

    default:
      return;
  }
};
