import React, { ReactNode, createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { reducer } from "./cartReducer";
import { CartState } from "common/types";

export interface IProps {
  children: ReactNode;
}

const initialState: CartState = {
  products: [],
  isLoading: false,
  error: {},
};

const StateContext = createContext<CartState | null>(null);
const DispatchContext = createContext<CartState | any>(null);

const Context = ({ children }: IProps) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const getState = () => useContext(StateContext);
export const dispatchToState = () => useContext(DispatchContext);

export default Context;
