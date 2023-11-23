import { createState } from "iares";
import { createActions } from "./actions";
import { StoreType } from "./types";

const store = createState<StoreType>({
  text: "Hello world",
});

const actions = createActions(store);

export { store, actions };
