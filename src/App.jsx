import React from 'react';
import { Route } from 'wouter'
import PageHeader from './components/Molecules/PageHeader/PageHeader';
import CurrentStiker from './components/Pages/CurrentStiker';
import Home from './components/Pages/Home';
import Stikers from './components/Pages/Stikers';
import { StikersContextProvider } from './context/StikerContext';

const App = () => {
  return (
    <>
    <PageHeader />
      <StikersContextProvider>
        <Route path="/" component={Home} />
        <Route path="/stiker/:id" component={CurrentStiker}/>
        <Route path="/search/:keyword" component={Stikers}/>
      </StikersContextProvider>
      
    </>
  )
}

export default App;
