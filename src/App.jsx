import './App.css'
import SearchBox from './components/SearchBox'
import History from './components/History'
import { useEffect, useState } from 'react'

function App() {
  const [items, setItems] = useState(getInitialItems())

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  function getInitialItems() {
    const savedItems = JSON.parse(localStorage.getItem('items'));
    return savedItems || [];
  }

  return (
    <>
      <h1>Albion Online Black Market Tool</h1>
      <SearchBox setItems={setItems} />
      <History items={items} />
    </>
  )
}

export default App
