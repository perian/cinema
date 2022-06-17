import { createStore } from "@reduxjs/toolkit";
import { initialState, reducer } from "./reducer";

const store = createStore(reducer, initialState);
