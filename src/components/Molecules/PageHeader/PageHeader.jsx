import React, {useState} from 'react';
import { Link, useLocation } from 'wouter'
import './PageHeader.scss'

const PageHeader = () => {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  console.log(path)

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('keyword', keyword)
    pushLocation(`/search/${keyword}`)
  }

  const changeKeyword = (e) => setKeyword(e.target.value)
  return (
    <header className="main-header">
      <div className="header max-width">
        <div><Link to="/"><img src="https://developers.giphy.com/branch/master/static/header-logo-8974b8ae658f704a5b48a2d039b8ad93.gif" alt="Logo"/></Link></div> 
        <div>
          <form onSubmit={handleSubmit} className="form-seach">
            <input type="text" placeholder="¿Que quieres Buscar?" value={keyword} onChange={(changeKeyword)}/>
            <button>Buscar</button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default PageHeader