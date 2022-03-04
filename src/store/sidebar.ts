import {
  ActionCreatorWithPayload,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";
import { Store } from "./store";

export const setSidebar: ActionCreatorWithPayload<boolean, "setSidebar"> =
  createAction("setSidebar");

export default createReducer(false, {
  [setSidebar.type]: (s, { payload }) => payload,
});

export const getSidebar = (s: Store): boolean => s.sidebar;
