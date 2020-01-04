import { ToastType } from '../Toast'
import { DefaultAction } from '../../../constants/types'
import { HIDE_TOAST, SHOW_TOAST } from './action-types'

const initialState: any = {
  show: false,
  message: '',
  type: ToastType.INFO
}

const toastReducer = (state = initialState, action: DefaultAction) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        show: true,
        ...action.payload
      }
    case HIDE_TOAST:
      return {
        ...state,
        show: false
      }
    default:
      return state
  }
}

export default toastReducer
