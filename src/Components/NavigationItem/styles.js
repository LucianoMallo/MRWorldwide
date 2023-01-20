import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const ContainerNavitem = styled.div`
    width: fit-content;
    height: 3%;
    cursor: pointer;
    ${withTheme('padding-left', 'sizes.rem04')}
    ${withTheme('padding-right', 'sizes.rem04')}
    ${withTheme('color', 'colors.softBlack')}
    position:sticky;
    ${withTheme('font-size', 'sizes.rem16')}
    font-family:arial;
`

export const IsSelected = styled.p`
    border-bottom: 6px solid #FF5656;
    ${withTheme('color', 'colors.coral')}
`

export const IsNotSelected = styled.p`
    ${withTheme('color', 'colors.softBlack')}
    &:hover{
        ${withTheme('color', 'colors.olive')}
    }
`
