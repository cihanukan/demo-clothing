import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // we defined local storage not session storage

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // we only want to cache cart
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
