import { useState } from 'react'
import { Frame } from './styles.js'
import { Countries as countriesToShow } from './ListOfCountries/Countries'

const SelectCountryDropdown = ({ onChange = null, selected = null }) => {
  const countryValues = selected[0] + ',' + selected[1]
  const [countrySelected, setcountrySelected] = useState('')

  if (countryValues !== countrySelected && countryValues !== 'undefined,undefined') { setcountrySelected(countryValues) }

  const setCountry = (country) => {
    if (onChange != null) {
      const strings = country.split(',')
      onChange({ country: strings[0], country_code: strings[1] })
      setcountrySelected(strings)
    }
  }
  return (
    <Frame>
      <select
        name='Country'
        id='countrySelectorDropdown'
        value={countrySelected}
        onChange={(event) => {
          setCountry(event.target.value)
          setcountrySelected(event.target.value)
        }}
      >
        {Object.values(countriesToShow).map((country, index) => {
          return (
            <option key={index} value={[country.name, country.code]}>
              {country.name}
            </option>
          )
        })}
      </select>
    </Frame>
  )
}

export default SelectCountryDropdown
