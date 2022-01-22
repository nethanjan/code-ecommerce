import {
  FETCH_ALL_PRODUCTS,
  FETCH_ALL_PRODUCTS_FAIL,
  FILTER_PRODUCTS,
} from "../actions/types";

const initialState = {
  productList: [],
};

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return {
        ...state,
        productList: action.payload,
      };
    case FETCH_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        productList: [],
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        productList: state.productList.filter(
          (element) => action.payload === element.details.size
        ),
      };
    default:
      return state;
  }
}
