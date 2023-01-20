import { render, screen } from '@testing-library/react'
import CardOFANew from './CardOfANew'
import data from './Moks/Mock'

const card = data
const componentToTest = () => {
  return <CardOFANew title={card.title} description={card.description} photo={card.photo} />
}
test('CardOFANew shows the news title', () => {
  render(componentToTest())
  const newTitle = screen.queryAllByText('Carlos le pego a marcos')
  expect(newTitle.length).toBeGreaterThan(0)
})

test('CardOFANew shows the news description', () => {
  render(componentToTest())
  const newDesciption = screen.queryAllByText('Carlos le partio la cara a marcos')
  expect(newDesciption.length).toBeGreaterThan(0)
})

test('CardOFANew shows the news photo', () => {
  render(componentToTest())
  const photo = screen.queryAllByAltText('photoOfTheNew')
  expect(photo.length).toBeGreaterThan(0)
})
