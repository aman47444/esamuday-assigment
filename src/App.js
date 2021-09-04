import './App.css';
import { useState, useEffect } from 'react';
import axois from 'axios'
import Pagination from './components/Pagination/Pagination';
import AnimalCard from './components/AnimalCard/AnimalCard';
import Filter from './components/FilterPop/Filter';
const URL = 'https://60d075407de0b20017108b89.mockapi.io/api/v1/animals';

function App() {
  const [fetchData, setfetchData] = useState([])
  const [err, setError] = useState('')
  const [query, setQuery] = useState('')
  const limit = Math.round(fetchData.length/10)

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value)
  }

  const handleLessClick = () => {
    axois.get(`${URL}?sortBy=createdAt&order=desc`)
      .then(res => setfetchData(res.data))
      .catch(err => setError(err.message))
  }

  const handleMoreClick = () => {
    axois.get(`${URL}?sortBy=createdAt&order=asc`)
      .then(res => setfetchData(res.data))
      .catch(err => setError(err.message))
  }

  useEffect(() => {
    if (query.length <= 0) {
      axois.get(URL)
        .then(res => setfetchData(res.data))
        .catch(err => setError(err.message))
    }
    if (query.length > 0) {
      axois.get(`${URL}?name=${query}`)
        .then(res => setfetchData(res.data))
    }
  }, [query])

  if (err) return <h1>{err}</h1>

  return (
    <div className="App">
      <div className="searchBox">
        <input type="search" placeholder="Search pets" onChange={handleSearch} />
      </div>
      <div className="filterContainer">
        <Filter
          handleLessClick={handleLessClick}
          handleMoreClick={handleMoreClick}
        />        
        <button type="button" onClick={handleLessClick}>Less than 1 Old Month</button>
        <button type="button" onClick={handleMoreClick}>More than 1 Old Month</button>
      </div>
      {
        fetchData.length > 0 ? (
          <Pagination
            data={fetchData}
            AnimalCard={AnimalCard}
            pageLimit={limit}
            dataLimit={10}
          />
        ) : <h1>No Records Found</h1>
      }
    </div>
  );
}

export default App;
