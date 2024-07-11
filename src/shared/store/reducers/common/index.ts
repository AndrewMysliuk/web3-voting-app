import { CommonState, CommonAction, CommonActionsEnum } from "./types"

const initialStore: CommonState = {
  isLoading: false,
}

export default function commonReducer(state = initialStore, action: CommonAction): CommonState {
  switch (action.type) {
    case CommonActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload }

    default:
      return state
  }
}
