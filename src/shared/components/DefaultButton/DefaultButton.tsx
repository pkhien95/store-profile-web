import React from 'react'
import styles from './DefaultButton.module.scss'
import classnames from 'classnames'

export interface DefaultButtonProps {
  className?: string
  text: string
  onClick: () => void
}

const DefaultButton: React.FC<DefaultButtonProps> = props => {
  const { className, text, onClick } = props
  return (
    <button className={classnames(styles.container, className)} onClick={onClick}>
      <span className={styles.text}>{text}</span>
    </button>
  )
}

export default DefaultButton
