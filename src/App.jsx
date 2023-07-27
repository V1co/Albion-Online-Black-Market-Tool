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
