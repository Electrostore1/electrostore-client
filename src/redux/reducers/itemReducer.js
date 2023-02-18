import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM_QUANTITY,
  REMOVE_ALL,
} from "../action/types";
const initialState = {
  itemsList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        itemsList: [...state.itemsList, action.payload],
      };

    case DELETE_ITEM:
      return {
        ...state,
        itemsList: state.itemsList.filter(
          (item) => item._id !== action.payload
        ),
      };

    case REMOVE_ALL:
      return initialState;
    case UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        itemsList: state.itemsList.map((item) => {
          console.log(action.payload.itemId);
          if (item._id === action.payload.itemId) {
            return {
              ...item,
              productQuantity: action.payload.quantity,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
}
