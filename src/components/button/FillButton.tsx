import React from 'react'

import Button, { ButtonProps } from './Button'

/**
 * @see See [Button](#button-2) for API. Sets `buttonStyle` prop to `fill`.
 */
const FillButton = (props: ButtonProps) => <Button {...props} buttonStyle="fill" />

export default FillButton
