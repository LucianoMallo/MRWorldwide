import data from './Components/NavigationBar/Mocks/Mock'
import NavigationBar from './Components/NavigationBar/index'
import { MainFrame, Title } from './styles.js'
import { useState } from 'react'
// import CardOFANew from './Components/CardOfANew/CardOfANew'
// import Data from './Components/CardOfANew/Moks/Mock'
import SelectCountryDropdown from './Components/SelectCountryDropdown/SelectCountryDropdown'
import { useCountry } from './Components/ApiLocalCountryReturm/ApiCallCountry'

function App () {
  const countryName = useCountry().country
  let countryCode = useCountry().country_code
  if (countryCode !== undefined) {
    countryCode = countryCode.toLowerCase()
  }
  const [country, setCountry] = useState('United States')
  const [category, setCategory] = useState('general')
  const ChangeCategory = (category) => {
    setCategory(category)
  }
  
  const ChangeCountry = (country) => {
    setCountry(country)

  }
  return (
    <MainFrame className='App'>
      <header className='App-header'>
        <SelectCountryDropdown onChange={ChangeCountry} />
        <Title className='Title'> Mr Worldwide </Title>
        <NavigationBar categories={data} onChange = {ChangeCategory}/>
      </header>
      <p>Insert here a web page</p>
    </MainFrame>
  )
}

export default App
