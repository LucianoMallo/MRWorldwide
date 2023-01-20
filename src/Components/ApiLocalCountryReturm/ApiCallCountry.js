import axios from 'axios'
import { useState, useEffect } from 'react'
const url = 'https://ipwho.is/'

export const useCountry = () => {
  const [localCountry, setLocalCountry] = useState([])
  useEffect(() => {
    axios.get(url).then((response) => {
      setLocalCountry([response.data.country, response.data.country_code.toLowerCase()])
    })
  }, [url])
  return [localCountry, setLocalCountry]
}
export default useCountry
