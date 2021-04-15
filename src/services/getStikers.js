export const getStikers = async (keyword) => {
  const url = `${process.env.REACT_APP_API_URL}/stickers/search?api_key=${process.env.REACT_APP_API_KEY}&q=${keyword}&limit=${50}&offset=${0}&rating=g&lang=en`
  const response = await fetch(url)
  if(response.status === 200) {
    const data = await response.json()
    console.log('Repuesta correcta: ',  data.data)
    return data.data
  }
}