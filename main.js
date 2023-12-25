import { legacy_createStore } from "redux";

//? creating an action variable
const orderCake = "cake_order"; // The action name is stored in the string format
const restockCake = "cake_restock";
//? creation of action creator where action creator is a function which returns the action object containing the mandatory property named as type and other properties
function orderACake() {
  return {
    type: orderCake,
    quantity: 1,
  };
}

function restockingCake() {
  return {
    type: restockCake,
    quantity: 1,
  };
}
//? after that we will gonna create initialState initial state is an object which contains the object where state of the whole application is been saved

const initialState = {
  numberOfCakes: 10,
};

//? reducer is an pure function which has two input arguments previous state and action and returns new state
const reducer = (previousState = initialState, action) => {
  switch (action.type) {
    case "cake_order":
      return {
        ...previousState,
        numberOfCakes: previousState.numberOfCakes - 1,
      };
    case "cake_restock":
      return {
        ...previousState,
        numberOfCakes: previousState.numberOfCakes + 1,
      };
    default:
      return previousState;
  }
};

//?creating store where store would be an returned value of redux.createStore which will take reducer as an input
const store = legacy_createStore(reducer);

console.log("initial store value", store.getState());
//? I will subscribe to store with subscribe method

const unsubscribe = store.subscribe(() =>
  console.log("Updated value", store.getState())
);

store.dispatch(orderACake());
store.dispatch(orderACake());
store.dispatch(orderACake());
store.dispatch(orderACake());
store.dispatch(orderACake());

store.dispatch(restockingCake());
store.dispatch(restockingCake());
store.dispatch(restockingCake());
store.dispatch(restockingCake());
store.dispatch(restockingCake());
store.dispatch(restockingCake());
store.dispatch(restockingCake());
unsubscribe();
