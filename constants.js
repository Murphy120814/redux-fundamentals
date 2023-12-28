//? creating action constants for cake

export const ORDER_CAKE = "ORDER_CAKE";
export const RESTOCK_CAKE = "RESTOCK_CAKE";

//?creating action constants for iceCream

export const ORDER_ICE_CREAM = "ORDER_ICE_CREAM";
export const RESTOCK_ICE_CREAM = "RESTOCK_ICE_CREAM";

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

//? action creators for iceCream
export function iceCreamOrdered(value = 1) {
  return {
    type: ORDER_ICE_CREAM,
    payload: value,
  };
}

export function iceCreamHasRestocked(value = 1) {
  return {
    type: RESTOCK_ICE_CREAM,
    payload: value,
  };
}
