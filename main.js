import {
  ORDER_CAKE,
  RESTOCK_CAKE,
  ORDER_ICE_CREAM,
  RESTOCK_ICE_CREAM,
} from "./constants";
import {
  cakeHasRestocked,
  cakeOrdered,
  iceCreamHasRestocked,
  iceCreamOrdered,
} from "./constants";
import { bindActionCreators, legacy_createStore, combineReducers } from "redux";

const initialCakeState = {
  numberOfCake: 10,
};

const initialIceCreamState = {
  numberOfIceCream: 10,
};
//? creating reducer aliasing to shopkeeper who will connect our actions to the store

const cakeReducer = (state = initialCakeState, action) => {
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

//? creating reducer for IceCream
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ORDER_ICE_CREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - action.payload,
      };
    case RESTOCK_ICE_CREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream + action.payload,
      };
    default:
      return state;
  }
};

const combinedReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
//?Now after creating the reducer you have to create the store that store can be created using legacyCreateStore

const store = legacy_createStore(combinedReducer);

console.log("Initial State", store.getState());
//? store is an object which gives us 4 methods dispatch , getState, subscribe, replaceReducer

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

//? Now going to use bindActionCreator to bind the actions to dispatch function this bindAction creator will return an object which includes the functions identified as the property name of that object and you can directly call those properties without writing
//! store.dispatch(actionName(payload))

const actions = bindActionCreators(
  { cakeOrdered, cakeHasRestocked, iceCreamHasRestocked, iceCreamOrdered },
  store.dispatch
);

console.log(actions);

actions.cakeOrdered(1);
actions.iceCreamHasRestocked(10);
actions.cakeHasRestocked(10);

unsubscribe(); //?unsubscribe is use to cancel the subscription from the store this unsubscribe function has been returned by the subscribe function
