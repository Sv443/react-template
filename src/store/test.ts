import {
  ActionCreatorWithPayload,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";
import { Store } from "./store";

export const setTest: ActionCreatorWithPayload<string, "setTest"> =
  createAction("setTest");

export default createReducer("yo", {
  [setTest.type]: (s, { payload }) => payload,
});

export const getTest = (s: Store): string => s.test;
