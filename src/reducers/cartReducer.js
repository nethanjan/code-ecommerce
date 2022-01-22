import { ADD_TO_CART, ADD_TO_CART_FAIL } from "../actions/types";

const initialState = {
  cartList: [],
};

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartList: action.payload,
      };
    case ADD_TO_CART_FAIL:
      return {
        ...state,
        cartList: [],
      };
    default:
      return state;
  }
}
