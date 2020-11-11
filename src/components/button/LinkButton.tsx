import React from 'react'

import Button, { ButtonProps } from './Button'

/**
 * @see See [Button](#button-2) for API. Sets `buttonStyle` prop to `link`.
 */
const LinkButton = (props: ButtonProps) => <Button {...props} buttonStyle='link' />

export default LinkButton
