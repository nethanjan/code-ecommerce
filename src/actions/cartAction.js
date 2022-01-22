import store from "../store";

import { ADD_TO_CART, ADD_TO_CART_FAIL } from "./types";

export const addToCart = (product) => async (dispatch) => {
  const { cartList } = store.getState().cart;

  if (cartList.length) {
    const existingIndex = cartList.findIndex((list) => list.id === product.id);

    if (existingIndex >= 0) {
      cartList[existingIndex].quantity += 1;
    } else {
      cartList.push({
        id: product.id,
        name: product.name,
        image: product.details.image,
        size: product.details.size,
        price: product.details.price,
        quantity: 1,
      });
    }
  } else {
    cartList.push({
      id: product.id,
      name: product.name,
      image: product.details.image,
      size: product.details.size,
      price: product.details.price,
      quantity: 1,
    });
  }

  try {
    dispatch({ type: ADD_TO_CART, payload: cartList });
  } catch (e) {
    dispatch({ type: ADD_TO_CART_FAIL, payload: [] });
  }
};
