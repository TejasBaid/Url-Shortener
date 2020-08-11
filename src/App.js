import React from 'react';
import {Header} from './components/header/Header'
import {HomePage} from './components/homepage/HomePage'
import './App.css';
import {ResultContextProvider} from './result-context'
import { ResultPage } from './components/result/ResultPage';

function App() {
  return (
    <div className="App">
      <ResultContextProvider>
        <Header />  
        <HomePage />
        <ResultPage />
      </ResultContextProvider>
    </div>
  );
}

export default App;
