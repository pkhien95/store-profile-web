import React from 'react'
import styles from './DefaultInput.module.scss'
import classnames from 'classnames'
import { isEmpty } from 'lodash'

export interface DefaultInputProps extends React.HTMLProps<HTMLInputElement> {
  className?: string
  label?: string
}

const DefaultInput: React.FC<DefaultInputProps> = props => {
  const { className, label, ...rest } = props

  return (
    <div className={classnames(styles.container, className)}>
      {!isEmpty(label) && <span className={styles.label}>{label}</span>}
      <input className={styles.input} {...rest} />
    </div>
  )
}

export default DefaultInput
