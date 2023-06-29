const url = 'http://api.mediastack.com/v1/news?access_key=9f44021f602fa7dbdd217ffaed2b519f'

// Notes About Api Call
// CategorybaseRequest = url + '&categories=' + CategoryName
// CountrybaseRequest = url + '&countries=' + CountryName
// CountryAndCategoryRequest = url + '&countries='+ CountryName '&categories=' + CategoryName

export const GetCards = async ({ localCountry = null, category = null }) => {
  const newUrl = GetNewUrl(localCountry, category)
  const response = await fetch(newUrl)
  if (!response.ok) {
    throw new Error({
      message: 'Something went wrong',
      statusCode: response.status

    })
  }
  const jsonData = await response.json()
  return jsonData.data
}

const GetNewUrl = (localCountry, category) => {
  let newUrl = url
  if (localCountry !== null && localCountry !== undefined) {
    newUrl += '&countries=' + localCountry
  }
  if (category !== null && category !== undefined) {
    newUrl += '&categories=' + category
  }
  return newUrl
}

// export const GetCards = async ({ localCountry = null, category = null }) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const newUrl = checkNewUrl(localCountry, category)
//       const response = await fetch(newUrl)
//       if (!response.ok) {
//         reject(new Error(`Error: ${response.status}`))
//       }
//       const data = await response.json()
//       resolve(data.data)
//     } catch (error) {
//       reject(error)
//     }
//   })
// }

//   useEffect(() => {
//     fetch(newUrl)
//       .then(response => response.json())
//       .then(data => setCardsToList(data.data))
//   }, [newUrl])
//   return (cardsToList)
// }

// useEffect(() => {
//   fetch(newUrl)
//     .then(response => response.json())
//     .then(data => setCardsToList(data.data))
// }, [newUrl])
// return (cardsToList)
// }

// export const Cards = ({ localCountry = null, category = null }) => {
//   const [cardsToList, setCardsToList] = useState([])
//   const newUrl = checkNewUrl(localCountry, category)

//   useEffect(() => {
//     axios.get(newUrl).then((response) => {
//       setCardsToList(response.data.data)
//     })
//   }, [newUrl])
//   return (cardsToList)
// }
