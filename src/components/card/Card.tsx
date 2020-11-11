import React from 'react'
import { Class } from 'utility-types'

import { withTheme } from '../theme'
import { Box } from '../primitives'

export type CardProps = {
  theme: any
  is: string | (() => void) | Class<React.ComponentType>
  children?: React.ReactNode
  surface?: string
}

const Card: React.FunctionComponent<CardProps> = ({
  is = 'section',
  children = undefined,
  theme,
  surface = 'default',
  ...rest
}) => (
    <Box
      is={is}
      overflow='hidden'
      rounded={theme.radius}
      bg={theme.surfaceColors[surface] || theme.brandColors[surface]}
      text={surface !== 'default' ? theme.textColors.on[surface] : undefined}
      {...rest}
    >
      {children}
    </Box>
  )

export { Card as component }
export default withTheme(Card)
