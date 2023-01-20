import NavigationItem from '../NavigationItem/index'
import { NavigationBarContainer } from './style'
import { useState } from 'react'

const NavigationBar = props => {
  const [selectedState, setSelectedState] = useState(0)
  const tabSelected = (id,name) => {
    setSelectedState(id)
    props.onChange(name)
  }

  return (
    <NavigationBarContainer className='navigationBarContainer'>
      {props.categories.map((element, i) => {
        return <NavigationItem key={i} id={i} name={element} isSelected={i === selectedState} onChange={tabSelected}/>
      })}
    </NavigationBarContainer>
  )
}
export default NavigationBar