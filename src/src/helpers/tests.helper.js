import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Components from './components.helper'

export const clickComponentByTestId = id => {
  userEvent.click(screen.getByTestId(id))
}

export const getElementTextByTestId = id => {
  return screen.getByTestId(id).textContent
}

export const isTextInTheComponent = text => {
  const element = screen.getByText(new RegExp(text, ''))
  return element !== null
}

export const createComponent = (component, props) => {
  return React.createElement(component, {
    ...props
  })
}

export const addProp = (previousProps, newKey, newValue) => {
  previousProps = previousProps === '' ? '{ ' : previousProps
  previousProps = previousProps === '{ ' ? previousProps : previousProps + ', '
  return `${previousProps}"${newKey}": "${newValue}"`
}

export const renderComponent = (
  component,
  props = undefined,
  children = undefined
) => {
  console.log('***************************props', JSON.parse(props))
  // const newComponent = Components(component, props, children)
  const newComponent = Components(component, JSON.parse(props), children)
  render(<>{newComponent}</>)
  screen.debug()
}
