/** @format */

import {
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_ITEM_QUANTITY,
  REMOVE_ALL,
} from "./types";

// This portion is just for add and delete items from the card
export const addItems = (item) => {
  return (dispatch) => dispatch({ type: ADD_ITEM, payload: item });
};

export const deleteItems = (id) => {
  return (dispatch) => dispatch({ type: DELETE_ITEM, payload: id });
};

export const removeAllItems = () => {
  console.log("I am here....");
  return (dispatch) => dispatch({ type: REMOVE_ALL });
};

export const updateItemQuantity = (itemId, quantity) => {
  return (dispatch) =>
    dispatch({ type: UPDATE_ITEM_QUANTITY, payload: { itemId, quantity } });
};
