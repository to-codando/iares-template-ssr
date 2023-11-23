import { StateType } from "@/utils/types";

export type StoreType = {
  text: string;
};

export type StoreActions = {
  getText: { (): string };
};

export type ActionType = {
  (store: StateType<StoreType>): StoreActions;
};
