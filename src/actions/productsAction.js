import axios from "axios";

import {
  FETCH_ALL_PRODUCTS,
  FETCH_ALL_PRODUCTS_FAIL,
  FILTER_PRODUCTS,
} from "./types";
import { headerConfig } from "./actionHelper";

export const getAllProducts = () => async (dispatch) => {
  axios
    .get(
      "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments",
      headerConfig()
    )
    .then((res) => {
      dispatch({ type: FETCH_ALL_PRODUCTS, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_ALL_PRODUCTS_FAIL,
        payload: error.response ? error.response.data.message : "Server Error",
      });
    });
};

export const filterProducts = (type) => async (dispatch) => {
  new Promise((resolve, reject) => {
    dispatch(getAllProducts());
    resolve();
  }).then(() => {
    setTimeout(() => {
      dispatch({ type: FILTER_PRODUCTS, payload: type });
    }, 1000);
  });
};
