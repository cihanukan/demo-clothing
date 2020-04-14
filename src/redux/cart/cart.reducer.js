import { cartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.util";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

//cartItems: addItemToCart(state.cartItems, action.payload)

//Bu satır ile cart.util içindeki functiona cartItems array'i ve
//collection-item componentinde yer alan onClick eventine gelen item'ı ( bizim için bir payload)
// gönderdik


export default cartReducer;
