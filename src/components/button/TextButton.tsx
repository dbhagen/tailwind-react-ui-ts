import React from 'react'

import Button, { ButtonProps } from './Button'

/**
 * @see See [Button](#button-2) for API. Sets `buttonStyle` prop to `text`.
 */
const TextButton = (props: ButtonProps) => <Button {...props} buttonStyle='text' />

export default TextButton
