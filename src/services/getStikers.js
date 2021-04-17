export const getStikers = async ({keyword, limit = 20, page = 0} = {}) => {
  const url = `${process.env.REACT_APP_API_URL}/stickers/search?api_key=${process.env.REACT_APP_API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`
  const response = await fetch(url)
  if(response.status === 200) {
    const data = await response.json()
    console.log('Repuesta correcta: ',  data.data)
    return data.data
  }
}