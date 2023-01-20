import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { InformationMessage } from '../components/InformationMessage'
import TravelerInformation from '../components/TravelerInformation'
import NavigationItem from '../components/NavigationItem'
import Geek from '../components/Geek'

const Components = {
  informationMessage: InformationMessage,
  travelerInformation: TravelerInformation,
  navigationItem: NavigationItem,
  geek: Geek
}

export default (componentName, props, children = undefined) => {
  if (typeof Components[componentName] !== 'undefined') {
    if (children === undefined) {
      return React.createElement(Components[componentName], {
        key: uuidv4(),
        ...props
      })
    } else {
      return React.createElement(
        Components[componentName],
        {
          key: uuidv4(),
          ...props
        },
        children
      )
    }
  }
  return React.createElement(() => (
    <div>The component {componentName} has not been created yet.</div>
  ))
}
