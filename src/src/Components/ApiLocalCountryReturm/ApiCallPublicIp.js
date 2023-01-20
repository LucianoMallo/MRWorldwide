import axios from 'axios'
import { useState, useEffect } from 'react'
const url = 'https://api.ipify.org/?format=json'

export const getPublicIP = () => {
  const [publicIP, setPublicIP] = useState()
  useEffect(() => {
    axios.get(url).then((response) => {
      setPublicIP(response.data.data)
    })
  }, [])
  return (getPublicIP)
}