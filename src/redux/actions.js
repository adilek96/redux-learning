export function addGoodToCart(id) {
  return {
    type: "ADD_GOOD_TO_CART",
    payload: {
      id: id,
    },
  };
}
export function deleteGoodInCart(id) {
  return {
    type: "DELETE_GOOD_IN_CART",
    payload: {
      id: id,
    },
  };
}
export function amountChange(amount, id) {
  return {
    type: "AMOUNT_CHANGE_IN_CART",
    payload: {
      amount: amount,
      id: id,
    },
  };
}
export function getTotal() {
  return {
    type: "TOTAL_PRICE",
  };
}
