import { createSelector } from "reselect";

const selectCart = (state) => state.cart; // input selector. It is a function to get whole state and just returns a slice of it.

//output selector. It is going to use input selector as an argument.
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

//get the cartItems and calculate quantity. We have memoized count and cartItems array.
//There is no need to calculate every irrelevant state call such as currentUser.
//Otherwise every call on mapStateToProps would cause to recalculate quantity even there wasn't any changes on it.
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
);

export const selectCartTotals = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0)
)
