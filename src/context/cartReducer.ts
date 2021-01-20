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
  switch (type) {
    case "handleState": {
      draft[field] = payload;
      return;
    }

    default:
      return;
  }
};
