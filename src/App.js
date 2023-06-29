import { useState } from 'react'
import categories from './Components/NavigationBar/Mocks/Mock'
import NavigationBar from './Components/NavigationBar/index'
import { MainFrame, Title, LoadingFrame } from './styles.js'
import SelectCountryDropdown from './Components/SelectCountryDropdown/SelectCountryDropdown'
import { GetCountry } from './Components/ApiLocalCountryReturm/ApiCallCountry'
import NewsContainer from './Components/NewsContainer/NewsContainer'
import { useFetchData } from './hooks/useFetchData'

function App () {
  // const [countryState, setCountry] = useState([])
  const [category, setCategory] = useState('general')

  const [data, isLoaded, isError, setData] = useFetchData({
    key: -1,
    action: GetCountry()
  })
  const ChangeCategory = (category) => {
    setCategory(category)
  }

  const ChangeCountry = (country) => {
    setData(country)
  }
  if (!isLoaded) return (<LoadingFrame>Fetching news for you...</LoadingFrame>)

  if (isError) {
    return <p>Error mi pana</p>
  }
  return (

    <MainFrame className='App'>
      <header className='App-header'>
        <SelectCountryDropdown
          onChange={ChangeCountry}
          selected={[data.country, data.country_code.toLowerCase()]}
        />
        <Title className='Title'> Mr Worldwide </Title>
        <NavigationBar categories={categories} onChange={ChangeCategory} />

      </header>
      <NewsContainer localCountry={data.country_code.toLowerCase()} category={category} />
    </MainFrame>
  )
}

export default App

// useEffect(() => {
//   setStatus('loading')
//   GetCountry().then(data => {
//     setCountry([data.country, data.country_code.toLowerCase()])
//     setStatus('sucess')
//   })
// }, [])

/* const url = 'http://ipwho.is/'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCountry([response.data.country, response.data.country_code])
    })
  }, [url]) */
