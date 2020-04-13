//Actions are literally function that returns object
import  {userActionTypes} from "./user.types";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER, //action type ile reducer action type aynı olmalı
  payload: user
});
