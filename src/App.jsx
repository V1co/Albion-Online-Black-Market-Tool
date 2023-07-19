import './App.css'
import SearchBox from './components/SearchBox'
import History from './components/History'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([])
  const [queryArray, setQueryArray] = useState([]);

  return (
    <>
      <h1>Albion Online Black Market Tool</h1>
      <SearchBox setItems={setItems} queryArray={queryArray} setQueryArray={setQueryArray}/>
      <History items={items} />
    </>
  )
}

export default App
