import React, { useEffect, useState } from 'react'
import styles from './Toast.module.scss'
import classnames from 'classnames'
export enum ToastType {
  INFO,
  ERROR
}

export interface ToastProps {
  type: ToastType
  message: string
  show: boolean
  hideToast: () => void
}

const Toast: React.FC<ToastProps> = props => {
  const { type, message, show, hideToast } = props
  console.log(type)

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        hideToast()
      }, 3000)
    }
  }, [show])

  if (!show) {
    return null
  }

  return (
    <div
      className={`${styles.container} ${
        type === ToastType.INFO ? styles.info : styles.error
      }`}
    >
      <span className={styles.text}>{message}</span>
    </div>
  )
}

export default Toast
