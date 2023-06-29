import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.div`
width: 100%;
height: fit-content;
box-sizing: border-box;
background: rgba(217, 217, 217, 0.58);
border: 1px solid white;
box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
backdrop-filter: blur(6px);
text-align: center;
cursor: pointer;
transition: all 0.5s;
display: flex;
align-items: center;
justify-content: center;
user-select: none;
font-weight: bolder;
float:left;
min-height:269px;
min-width:165px;

display: flex; 
flex-wrap:wrap;

${withTheme('margin-left', 'sizes.rem02')}
${withTheme('margin-bottom', 'sizes.rem05')}
${withTheme('padding', 'sizes.rem02')}
${withTheme('background-color', 'colors.sand')}
:hover{
    border: 1px solid black;
    transform: scale(0.98);
}
`
export const PhotoOfTheNew = styled.img`
display: inline-block; 
// margin-top:0.5rem;
width:50%;
min-width:130px;
`
export const Data = styled.div`
display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`
export const Title = styled.p`
text-align: justify;
${withTheme('font-weight', 'fontWeight.bold')}
${withTheme('font-size', 'sizes.rem09')}

`
export const Description = styled.p`
line-break: auto;
text-align: justify;
position: relative;
${withTheme('font-size', 'sizes.rem07')}
${withTheme('bottom', 'sizes.rem05')}

`
