import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.div`
${withTheme('background-color', 'colors.sand')}
width: 98%;
display:flex;
justify-content: flex-start;
align-content:stretch;
align-items:center;
flex-direction:column;
// margin-top:2rem;
// margin-left: auto;
// margin-right: auto;
`
export const LoadingText = styled.div`
${withTheme('background-color', 'colors.sand')}
width: 98%;
display:flex;
justify-content: flex-start;
align-content:stretch;
align-items:center;
flex-direction:column;
`
