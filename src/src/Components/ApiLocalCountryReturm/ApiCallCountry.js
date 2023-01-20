import axios from 'axios'
import { useState, useEffect } from 'react'
const url = 'http://ipwho.is/'

export const useCountry = () => {
  const [localCountry, setLocalCountry] = useState([])
  useEffect(() => {
    axios.get(url).then((response) => {
      setLocalCountry(response.data)
    })
  }, [url])
  return localCountry
}
export default useCountry
