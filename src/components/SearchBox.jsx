import { useState } from 'react'
import Item from './Item';

export default function SearchBox() {

  const [ query, setQuery ] = useState("");
  const [ items, setItems ] = useState([]);
  const [ tier, setTier] = useState("T4_")
  const [ quality, setQuality ] = useState("1")
  const [ enchantment, setEnchantment ] = useState("")
  const [ server, setServer ] = useState("east")

  // Locations and qualities need to be comma separated if selected as multiple choice
  // CAPEITEM_DEMON
  // CAPEITEM_HERETIC
  // CAPEITEM_KEEPER
  // CAPEITEM_MORGANA
  // CAPEITEM_UNDEAD
  // CAPEITEM_FW_BRIDGEWATCH
  // CAPEITEM_FW_CAERLEON
  // CAPEITEM_FW_FORTSTERLING
  // CAPEITEM_FW_LYMHURST
  // CAPEITEM_FW_MARTLOCK
  // CAPEITEM_FW_THETFORD
  // CAPEITEM_FW_BRECILIEN
  // CAPEITEM_AVALON
  // ARMOR_CLOTH_KEEPER
  // ARMOR_PLATE_UNDEAD
  // ARMOR_PLATE_SET2
  // ARMOR_PLATE_SET3
  // 2H_COMBATSTAFF_MORGANA
  // 2H_IRONCLADEDSTAFF
  // 2H_DOUBLEBLADEDSTAFF


  const fetchData = async (e) => {
    e.preventDefault();

    const url = `https://${server}.albion-online-data.com/api/v2/stats/prices/${tier}${query}${enchantment}?locations=Black Market&qualities=${quality}`

    try {
      const startDate = new Date().getTime()
      const res = await fetch(url)
      const data = await res.json()
      if (items.length === 0) {
        setItems(data)
        console.log(data)
      } else {
        setItems(prev => prev.concat(data))
      }
      const endDate = new Date().getTime()
      const time = (endDate - startDate) / 1000;
      console.log(`Time taken to read data: ${time} second(s)`)
    } catch (error) {
      console.error(error)
    }
  }

  return(
    <>
      <div>
        <form onSubmit={fetchData} className='m-4'>
          <div className='flex flex-row gap-4 items-center'>
            <input
              className='border-black border-2 rounded-md indent-2'
              type='text'
              name='query'
              placeholder='i.e. Bag'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <label htmlFor="quality">Quality:</label>
            <select
              className='border-black border-2 rounded-md'
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
              className='border-black border-2 rounded-md'
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
              className='border-black border-2 rounded-md'
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
              className='border-black border-2 rounded-md'
              name="server"
              id="server"
              onChange={e => setServer(e.target.value)}
            >
              <option value="east">East</option>
              <option value="west">West</option>
            </select>

            <button type='submit' className='border-black border-2 rounded-md'>Search</button>
          </div>
        </form>
        <hr />
      </div>

      <div>
        {items.length > 0 && (
          console.log(items),
          items.map(data => (
            <Item
              key={data.item_id}
              name={data.item_id}
              price={data.sell_price_min}
              timeOfSale={data.sell_price_min_date}
            />
          ))
        )}
      </div>
    </>
  )
}