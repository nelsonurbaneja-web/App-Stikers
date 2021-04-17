export const getSingleStiker = async ({ id }) => {
  const url = `${process.env.REACT_APP_API_URL}/gifs/${id}?api_key=${process.env.REACT_APP_API_KEY}`
  const response = await fetch(url)
  if(response.status === 200) {
    const data = await response.json()
    console.log('Repuesta correcta: ',  data.data)
    return data.data
  }
}