import React from 'react'

import { withTheme } from '../theme'
import { Touchable } from '../primitives'
import { getColorShade } from '../tailwind'

export type ButtonProps = {
  theme: any
  is: string
  children?: React.ReactNode
  color?: string
  type?: string
  buttonStyle?: 'fill' | 'outline' | 'text' | 'link'
  disabled?: boolean
  large?: boolean
  small?: boolean
  fullWidth?: boolean
  brand?: string
  bg?: string | []
  text?: string | []
  border?: (string | boolean | undefined)[] | string
  leading?: string
  p?: number | {
    x: string | number
    y: string | number
  }
  rounded?: string
  opacity?: number
  underline?: boolean
  role?: string
  w?: string
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  theme,
  is = 'button',
  children = undefined,
  color = 'primary',
  type = 'button',
  buttonStyle = 'fill',
  disabled = false,
  large = false,
  small = false,
  fullWidth = false,
  bg = undefined,
  text = undefined,
  border = [],
  brand = undefined,
  ...rest
}) => {

  const props: ButtonProps = {
    theme: theme,
    is: is,
    type: 'fill',
    border: [true, 'transparent'],
    leading: 'tight',
    p: { x: theme.spacing.md, y: theme.spacing.sm },
    rounded: theme.radius,
    opacity: 100
  }

  if (large) {
    props.p = { x: theme.spacing.lg, y: theme.spacing.md }
  } else if (small) {
    props.p = { x: theme.spacing.sm, y: theme.spacing.sm / 2 }
  }

  switch (buttonStyle) {
    case 'fill':
      props.bg = brand ? theme.brandColors[brand] : bg
      props.text = brand ? theme.textColors.on[brand] : text
      props['bg-hocus'] = getColorShade(
        brand ? theme.brandColors[brand] : bg,
        theme.highlightOffset,
      )
      break
    case 'outline':
      if (Array.isArray(props.border)) {
        props.border.push(brand ? theme.brandColors[brand] : border)
      } else {
        props.border += brand ? theme.brandColors[brand] : border
      }
      props.text = brand ? theme.brandColors[brand] : border
      props['bg-hocus'] = brand ? theme.brandColors[brand] : border
      props['text-hocus'] = brand ? theme.textColors.on[brand] : text
      break
    case 'text':
      props.text = brand ? theme.brandColors[brand] : text
      props['bg-hocus'] = `${getColorShade(
        brand ? theme.brandColors[brand] : text,
        '100',
      )}`
      break
    case 'link':
      props.rounded = undefined
      props.leading = 'normal'
      props.p = 0
      props.underline = true
      props.text = brand ? theme.brandColors[brand] : text
      props['text-hocus'] = getColorShade(
        brand ? theme.brandColors[brand] : text,
        theme.highlightOffset,
      )
      break
    default:
      break
  }

  if (is === 'button') {
    props.type = type
  } else {
    props.role = 'button'
  }

  if (disabled) {
    props.opacity = 50
  }

  if (fullWidth) {
    props.w = 'full'
  }

  //inlineBlock
  return (
    <Touchable {...props} {...rest}>
      {children}
    </Touchable>
  )
}

export { Button as component }
export default withTheme(Button)
