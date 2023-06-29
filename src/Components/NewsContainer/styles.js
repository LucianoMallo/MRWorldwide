import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.div`
// margin-left: auto;
// margin-right: auto;
width: 99%;
${withTheme('background-color', 'colors.sand')}
    display: grid; 
    grid-template-columns: 50% 50%; 
    grid-template-rows: 100%; 
    gap: 0% 1%; 
    grid-template-areas: ". ."; 
`
