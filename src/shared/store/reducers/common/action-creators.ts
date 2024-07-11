// import { AppDispatch } from "../.."
import { CommonActionsEnum, SetIsLoading } from "./types"

export const CommonActionCreators = {
  setIsLoading: (value: boolean): SetIsLoading => ({
    type: CommonActionsEnum.SET_IS_LOADING,
    payload: value,
  }),
}
