import { useState } from 'react'
import MultiSelectInput from './MultiSelectInput'

export default function SearchBox( { setItems } ) {

  const [ queryArray, setQueryArray ] = useState([]);
  const [ formData, setFormData ] = useState({
    tier: "T4_",
    quality: "1",
    enchantment: "",
    server: "west"
  })

  function handleForm(e) {
    const { name, value } = e.target
    console.log(e)
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const fetchData = async (e) => {
    e.preventDefault();

     for (let i = 0; i < queryArray.length; i++) {
      console.log(queryArray)
      console.log(formData)
      const url = `https://${formData.server}.albion-online-data.com/api/v2/stats/prices/${formData.tier}${queryArray[i].value}${formData.enchantment}?locations=Black Market&qualities=${formData.quality}`
      console.log(url)
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

        <div className='flex flex-row gap-4 items-center justify-center mb-4'>
          <label htmlFor="quality">Quality:</label>
          <select
            className='border-gray-300 border rounded-md'
            name="quality"
            id="quality"
            value={formData.quality}
            onChange={handleForm}
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
            value={formData.tier}
            onChange={handleForm}
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
            value={formData.enchantment}
            onChange={handleForm}
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
            value={formData.server}
            onChange={handleForm}
          >
            <option value="east">East</option>
            <option value="west">West</option>
          </select>
          <button type='submit' className='border-gray-500 border rounded-md'>Search</button>
        </div>
      </form>
      <hr />
      <br/>
    </div>
  )
}