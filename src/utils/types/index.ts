import { HTMType, TState } from 'iares';

export type TemplateType<T extends Object> = { (params: T): HTMType | HTMType[]}
export type PropsType<T extends Object> = T
export type ParamsType<T> = { params: T}
export type ActionsType<T extends Object> = T
export type HooksType<T extends Object> = T

export type TemplateParamsType<T extends Object> = T
export type TemplateStateType<T extends Object> = T
export type StateType<T extends Object> = TState<T>

