
// import { useEffect, useState } from 'react'
import { Frame } from './styles.js'
import CardOfANew from '../CardOfANew/CardOfANew'
import { GetCards } from './APICalls/data'
import { useFetchData } from '../../hooks/useFetchData.js'

const NewsList = ({ localCountry = null, category = null }) => {
  // const [data, setData] = useState([])
  // const [status, setStatus] = useState('loading')

  const [data, isLoaded, isError, setData] = useFetchData({
    key: localCountry,
    action: GetCards({ localCountry, category })
  })

  if (!isLoaded) return <p>Loading...</p>

  if (isError || data === null) {
    return <p>Error mi pana</p>
  }
  return (
    <Frame className='NewsList' data-testid='NewsList'>
      {
            data.map((card, index) => {
              return (
                <CardOfANew key={index} id={index} title={card.title} description={card.description} photo={card.image} url={card.url} />
              )
            })
        }
    </Frame>
  )
}

export default NewsList

// useEffect(() => {
//   GetCards({ localCountry, category }).then((datajson) => {
//     setData(datajson)
//     setStatus('success')
//   })
//   setStatus('loading')
// }, [localCountry, category])
