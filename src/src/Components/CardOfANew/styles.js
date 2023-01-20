import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.div`
width: fit-content;
height: fit-content;
${withTheme('margin-left', 'sizes.rem02')}
${withTheme('padding', 'sizes.rem02')}
${withTheme('background-color', 'colors.olive')}
`
export const PhotoOfTheNew = styled.img`
display: inline-block; 
${withTheme('width', 'sizes.rem4')}
${withTheme('height', 'sizes.rem4')}
`
export const Data = styled.div`
display: inline-block;
${withTheme('margin-left', 'sizes.rem05')}
position: relative;
${withTheme('bottom', 'sizes.rem05')}
`
export const Title = styled.p`
text-align: center;
${withTheme('font-weight', 'fontWeight.bold')}
${withTheme('font-size', 'sizes.rem09')}

`
export const Description = styled.p`
text-align: center;
position: relative;
${withTheme('font-size', 'sizes.rem07')}
${withTheme('bottom', 'sizes.rem05')}

`
