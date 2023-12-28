import { ORDER_CAKE, RESTOCK_CAKE } from "./constants";
import { cakeHasRestocked, cakeOrdered } from "./constants";
import { bindActionCreators, legacy_createStore } from "redux";

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

//? Now going to use bindActionCreator to bind the actions to dispatch function this bindAction creator will return an object which includes the functions identified as the property name of that object and you can directly call those properties without writing
//! store.dispatch(actionName(payload))

const actions = bindActionCreators(
  { cakeOrdered, cakeHasRestocked },
  store.dispatch
);

console.log(actions);

actions.cakeOrdered(1);
actions.cakeHasRestocked(10);

unsubscribe(); //?unsubscribe is use to cancel the subscription from the store this unsubscribe function has been returned by the subscribe function  
