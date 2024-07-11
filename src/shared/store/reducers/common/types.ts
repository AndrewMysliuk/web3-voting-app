export interface CommonState {
  isLoading: boolean
}

export enum CommonActionsEnum {
  SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetIsLoading {
  type: CommonActionsEnum.SET_IS_LOADING
  payload: boolean
}

export type CommonAction = SetIsLoading
