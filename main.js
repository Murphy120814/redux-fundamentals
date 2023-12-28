import { ORDER_CAKE, RESTOCK_CAKE } from "./constants";
import { cakeHasRestocked, cakeOrdered } from "./constants";
import { legacy_createStore } from "redux";

const initialState = {
  numberOfCake: 10,
};

//? creating reducer aliasing to shopkeeper who will connect our actions to the store

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake - action.payload,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake + action.payload,
      };
    default:
      return state;
  }
};

//?Now after creating the reducer you have to create the store that store can be created using legacyCreateStore

const store = legacy_createStore(reducer);

console.log("Initial State", store.getState());
//? store is an object which gives us 4 methods dispatch , getState, subscribe, replaceReducer

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
//?the subscribe method will run every time when there is change in the state of the application
store.dispatch(cakeOrdered());
store.dispatch(cakeOrdered());
store.dispatch(cakeOrdered());

store.dispatch(cakeHasRestocked(10));
