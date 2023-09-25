import './App.css'
import SearchBox from './components/SearchBox'
import History from './components/History'
import { useEffect, useState } from 'react'

function App() {
  // Lazy state initialization through arrow function which returns localStorage saved data
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('items')) || [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  function clearLocalStorage() {
    localStorage.clear()
    setItems([])
  }

  return (
    <>
      <h1>Albion Online Black Market Tool</h1>
      <button className='border-gray-500 border rounded-md mt-4' onClick={clearLocalStorage}>Clear LocalStorage</button>
      <SearchBox setItems={setItems} />
      <History items={items} />
    </>
  )
}

export default App
