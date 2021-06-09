import { Status } from "../status";
import axios from "axios";

const initialState = {
  data: [],
  status: Status.LOADING,
  error: null,
};

const SET_DATA_PRODUCTS = "app/reducer/products/SET_DATA_PRODUCTS";

export default reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA_PRODUCTS:
      return {
        ...state,
        data: payload.products,
        status: Status.SUCCESS,
      };
    default:
      return state;
  }
};
export const getAllProducts = () => {
  return (dispatch) => {
    axios
      .get(
        "https://a5q4jers4c.execute-api.us-east-2.amazonaws.com/prod/products"
      )
      .then((products) => {
        dispatch(setDataProducts(products));
      })
      .catch((err) => console.log("Error", err));
  };
};

export const setDataProducts = (products) => {
  return {
    type: SET_DATA_PRODUCTS,
    payload: products.data,
  };
};
