import React, { useState } from 'react'
import { useLocation } from 'wouter'

const FormSearch = () => {
  const [keyword, setKeyword] = useState('');
  const changeKeyword = (e) => setKeyword(e.target.value)
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('keyword', keyword)
    pushLocation(`/search/${keyword}`)
  }

  return (
    <form onSubmit={handleSubmit} className="form-seach">
      <input type="text" placeholder="¿Que quieres Buscar?" value={keyword} onChange={(changeKeyword)}/>
      <button>Buscar</button>
    </form>
  )
}

export default React.memo(FormSearch)