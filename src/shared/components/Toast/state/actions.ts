import { ToastType } from '../Toast'
import { HIDE_TOAST, SHOW_TOAST } from './action-types'

export const showToast = (type: ToastType, message: string) => ({
  type: SHOW_TOAST,
  payload: {
    type,
    message
  }
})

export const hideToast = () => ({
  type: HIDE_TOAST,
  payload: {}
})
