//Actions are literally function that returns object
import  {cartActionTypes} from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN, //action type ile reducer action type aynı olmalı
});


export const addItem = (item) =>({ // item bizim için her bir shop item (sapka gibi)
  type: cartActionTypes.ADD_ITEM,
  payload : item // payload her tıklanan elementin kendisi
})