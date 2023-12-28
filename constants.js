//? creating action constants

export const ORDER_CAKE = "ORDER_CAKE";
export const RESTOCK_CAKE = "RESTOCK_CAKE";

//? creating action creators ---> action creators are the function which returns an action object which includes the properties such as type and payload

export function cakeOrdered(value = 1) {
  return {
    type: ORDER_CAKE,
    payload: value,
  };
}

export function cakeHasRestocked(value = 1) {
  return {
    type: RESTOCK_CAKE,
    payload: value,
  };
}
