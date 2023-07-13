import './App.css'
import SearchBox from './components/SearchBox'
import History from './components/History'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([])

  return (
    <>
      <h1>Albion Online Black Market Tool</h1>
      <SearchBox items={items} setItems={setItems} />
      <History items={items} />
    </>
  )
}

export default App
