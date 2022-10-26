import {FC, ComponentProps} from 'react'

type Props = {
  disabled?:boolean
} & ComponentProps<'label'>
export const Label:FC<Props> = ({disabled=false, children, ...props}) =>
  <label
    {...props}
    className     = {disabled ? 'disabled' : undefined}
    >
        {children}
  </label>
