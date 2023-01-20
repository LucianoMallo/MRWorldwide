import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.div`
width: fit-content;
height: fit-content;
display: flex; 
${withTheme('margin-left', 'sizes.rem02')}
${withTheme('padding', 'sizes.rem02')}
${withTheme('background-color', 'colors.olive')}
`
export const PhotoOfTheNew = styled.img`
display: inline-block; 
margin-top:0.5rem;
${withTheme('width', 'sizes.rem5')}
${withTheme('height', 'sizes.rem5')}
`
export const Data = styled.div`
display: inline-block;
${withTheme('margin-left', 'sizes.rem05')}
position: relative;
${withTheme('bottom', 'sizes.rem05')}
`
export const Title = styled.p`
text-align: justify;
${withTheme('font-weight', 'fontWeight.bold')}
${withTheme('font-size', 'sizes.rem09')}

`
export const Description = styled.p`
text-align: justify;
position: relative;
${withTheme('font-size', 'sizes.rem07')}
${withTheme('bottom', 'sizes.rem05')}

`
