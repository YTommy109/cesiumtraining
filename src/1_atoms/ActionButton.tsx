import { FC } from 'react'

type Props = {
  label:string
  disabled?:boolean
  handleAction:() => void
}

export const ActionButton:FC<Props> = ({label, disabled, ...props}) =>
  <button
    onClick   = {props.handleAction}
    disabled  = {disabled ?? false}
    >
    {label}
  </button>
