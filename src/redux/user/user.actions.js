//Actions are literally function that returns object

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER", //action type ile reducer action type aynı olmalı
  payload: user
});
