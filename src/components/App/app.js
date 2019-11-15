import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchBar from '../SearchBar/Searchbar';
import BusinessList from '../BusinessList/BusinessList';

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
