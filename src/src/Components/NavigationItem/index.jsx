import React from 'react'
import { ContainerNavitem, IsSelected, IsNotSelected } from './styles.js'


const NavigationItem = ({ id = 0, name = 'John Doe', isSelected = false, onChange = null }) => {
  
  const select = (e) => {
    if (onChange !== null) {
      onChange(id,name)
    }
    isSelected = true
  }
  
  return (
    <div>
      {isSelected === true
        ? <ContainerNavitem><IsSelected>{name}</IsSelected></ContainerNavitem>
        : <ContainerNavitem><IsNotSelected onClick={event => { select(event) }}>{name}</IsNotSelected></ContainerNavitem>}
    </div>
  )
}
export default NavigationItem
