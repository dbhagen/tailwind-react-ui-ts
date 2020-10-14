import React from 'react'

import Base from './Base'

export type TouchableProps = {
  // is: React.ComponentType | React.ComponentClass<{}, any> | React.FunctionComponent<{}> | string
  is: string
  children?: React.ReactNode
  disabled?: boolean
  tabIndex?: number
  onTouch?: Function
}
const focusableElements = ['input', 'select', 'textarea', 'button', 'a']

export class Touchable extends React.PureComponent<TouchableProps> {
  static defaultProps = {
    is: 'button',
    children: undefined,
    disabled: false,
    tabIndex: undefined,
    onTouch: undefined,
  }
  constructor(props: TouchableProps) {
    super(props)

    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(e: React.KeyboardEvent) {
    const { onTouch } = this.props
    if (
      onTouch &&
      ((e.key &&
        (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar')) ||
        (e.keyCode && (e.keyCode === 13 || e.keyCode === 32)))
    ) {
      e.preventDefault()
      onTouch(e)
    }
  }

  render() {
    const { is, children, tabIndex, disabled, onTouch, ...rest } = this.props
    const isSemantic = focusableElements.includes(is)

    return (
      <Base
        is={is}
        select="none"
        cursor="pointer"
        pointerEvents={disabled ? 'none' : undefined}
        focusable
        role={!isSemantic ? 'button' : undefined}
        tabIndex={tabIndex || (!isSemantic && !disabled ? 0 : undefined)}
        opacity={disabled ? 50 : undefined}
        disabled={disabled}
        aria-disabled={disabled || undefined}
        onClick={onTouch}
        onKeyPress={!isSemantic && !disabled ? this.handleKeyPress : undefined}
        {...rest}
      >
        {children}
      </Base>
    )
  }
}

export default Touchable
