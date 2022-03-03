import reducer from "./reducer";
import { get } from "lodash-es";
import {
  configureStore,
  combineReducers,
  Dispatch,
  EnhancedStore,
  Reducer,
  ConfigureStoreOptions,
} from "@reduxjs/toolkit";

let dispatch: Dispatch, store: EnhancedStore;

const combinedReduces = combineReducers(reducer);

const rootReducer: Reducer = (state, action) => {
  //   if (action.type === logout.toString()) {
  //     state = undefined;
  //   }
  return combinedReduces(state, action);
};

export const initStore = ({
    initialState,
  }: {
    initialState: ConfigureStoreOptions["preloadedState"];
  }) => {
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
      //"immutableCheck" slows down app, if larger objects exists in state.
      //Since "immer" is used for reducers by default, we can disable it
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: false,
        }),
    });
    dispatch = store.dispatch;
    return store;
  },
  getState = (arg: Parameters<typeof get>[1]) =>
    arg === undefined ? store.getState() : get(store.getState(), arg);

export { dispatch, store };

export default getState;
