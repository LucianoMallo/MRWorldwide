import styled from '@emotion/styled'
import { withTheme } from './helpers/styles.helper'

export const MainFrame = styled.div`
text-align: center;
${withTheme('background-color', 'colors.background')}
`
export const Title = styled.h1`
${withTheme('background-color', 'colors.background')}
`
