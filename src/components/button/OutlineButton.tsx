import React from 'react'

import Button, { ButtonProps } from './Button'

/**
 * @see See [Button](#button-2) for API. Sets `buttonStyle` prop to `outline`.
 */
const OutlineButton = (props: ButtonProps) => <Button {...props} buttonStyle='outline' />

export default OutlineButton
