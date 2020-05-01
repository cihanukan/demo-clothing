//Gruplama
/*Eklenmeye calısılan cartItem daha önce listeye eklenmiş mi
Bunun için find işlemi yapılır. Daha sonra adet bilgisi için obje looplanır
ve eklenmeye çalışılan item quantity bulunur.
Eğer item yoksa obje quantity 1 olacak sekilde array'e eklenir ve return edilir.
 */

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //existingCart yoksa
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

/*Bu işlemlerden sonra oluşturulan function, cart reducer a import edilir
Cart reducer üzerindeki her bir  click action için (cart action'a gönderilecek olan)
bu function çağrılarak quantity değeri hesaplanır. */

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
