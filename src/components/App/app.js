import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

function App() {
  return (
    <div className="App">
      <h1>React Restaurant Review Project</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
