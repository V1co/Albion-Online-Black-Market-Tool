import DateFromNow from "../utils/DateFromNow";
import itemsData from '../helpers/items.json'

const Item = ( { callbackName, price, timeOfSale } ) => {
  const itemName = callbackName.slice(3)
  const correctItemName = itemName.includes('@')? itemName.slice(0, -2) : itemName

  return(
    <div className='flex flex-row gap-4 items-center justify-center'>
      <img src={`https://render.albiononline.com/v1/item/${callbackName}`} className='w-16 h-16' />
      <p className='text-3xl'>{itemsData[correctItemName]}</p>
      <p className='text-3xl'>{price === 0? 'was not checked within 24 hours' : price}</p>
      {price === 0? '' : <p className='text-3xl'>{DateFromNow(timeOfSale)}</p>}
    </div>
  )
}

export default Item;