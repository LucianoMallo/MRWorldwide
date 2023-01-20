import { Frame } from './styles.js'
import NewsList from '../NewsList/NewsList.js'

const NewsContainer = ({ localCountry = null, category = null }) => {
  return (

    <Frame className='NewsContainer' data-testid='NewsContainer'>
      <NewsList category={category} className='InternationalNews' />
      <NewsList localCountry={localCountry} category={category} className='LocalNews' />
    </Frame>
  )
}

export default NewsContainer
