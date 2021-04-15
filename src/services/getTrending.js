export const getTendring = async () => {
  const url = `${process.env.REACT_APP_API_URL}/trending/searches?api_key=${process.env.REACT_APP_API_KEY}`
  const response = await fetch(url)
  if(response.status === 200) {
    const data = await response.json()
    return data.data
  }
}