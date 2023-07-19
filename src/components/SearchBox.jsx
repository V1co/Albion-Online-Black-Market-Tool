import React, { useState } from 'react'
import MultiSelectInput from './MultiSelectInput'

export default function SearchBox( { setItems, queryArray, setQueryArray } ) {

  const [ tier, setTier] = useState("T4_")
  const [ quality, setQuality ] = useState("1")
  const [ enchantment, setEnchantment ] = useState("")
  const [ server, setServer ] = useState("east")

  const fetchData = async (e) => {
    e.preventDefault();

    // Tried to use Promise.all but unfortunately it fails if any of promises fail
    // const promises = queryArray.map(item => {
    //   return `https://${server}.albion-online-data.com/api/v2/stats/prices/${tier}${item.value}${enchantment}?locations=Black Market&qualities=${quality}`
    // })

     for (let i = 0; i < queryArray.length; i++) {
      const url = `https://${server}.albion-online-data.com/api/v2/stats/prices/${tier}${queryArray[i].value}${enchantment}?locations=Black Market&qualities=${quality}`

      try {
        const startDate = new Date().getTime()
        const response = await fetch(url)
        const data = await response.json()
        setItems(prev => [...prev, ...data])
        const endDate = new Date().getTime()
        const time = (endDate - startDate) / 1000;
        console.log(`Time taken to read data: ${time} second(s)`)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return(
    <div>
      <form onSubmit={fetchData} className='m-4'>
        <MultiSelectInput setQueryArray={setQueryArray} />

        <div className='flex flex-row gap-4 items-center justify-center'>
          <label htmlFor="quality">Quality:</label>
          <select
            className='border-gray-300 border rounded-md'
            name="quality"
            id="quality"
            onChange={e => setQuality(e.target.value)}
          >
            <option value="1">Normal</option>
            <option value="2">Good</option>
            <option value="3">Outstanding</option>
            <option value="4">Excellent</option>
            <option value="5">Masterpiece</option>
          </select>

          <label htmlFor="tier">Tier:</label>
          <select
            className='border-gray-3500 border rounded-md'
            name="tier"
            id="tier"
            onChange={e => setTier(e.target.value)}
          >
            <option value="T4_">4</option>
            <option value="T5_">5</option>
            <option value="T6_">6</option>
            <option value="T7_">7</option>
            <option value="T8_">8</option>
          </select>

          <label htmlFor="enchantment">Enchantment:</label>
          <select
            className='border-gray-300 border rounded-md'
            name="enchantment"
            id="enchantment"
            onChange={e => setEnchantment(e.target.value)}
          >
            <option value="">0</option>
            <option value="@1">1</option>
            <option value="@2">2</option>
            <option value="@3">3</option>
            <option value="@4">4</option>
          </select>

          <label htmlFor="server">Server:</label>
          <select
            className='border-gray-300 border rounded-md'
            name="server"
            id="server"
            onChange={e => setServer(e.target.value)}
          >
            <option value="east">East</option>
            <option value="west">West</option>
          </select>

          <button type='submit' className='border-gray-500 border rounded-md'>Search</button>
        </div>
      </form>
      <hr />
    </div>
  )
}