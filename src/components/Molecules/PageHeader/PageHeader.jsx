import React from 'react';
import { Link } from 'wouter'
import FormSearch from '../FormSearch/FormSearch';
import './PageHeader.scss'

const PageHeader = () => {
  return (
    <header className="main-header">
      <div className="header max-width">
        <div><Link to="/"><img src="https://developers.giphy.com/branch/master/static/header-logo-8974b8ae658f704a5b48a2d039b8ad93.gif" alt="Logo"/></Link></div> 
        <div>
          <FormSearch />
        </div>
      </div>
    </header>
  )
}

export default PageHeader