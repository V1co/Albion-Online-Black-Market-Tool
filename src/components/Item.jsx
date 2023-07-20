import DateFromNow from "../utils/DateFromNow";
import itemsData from '../helpers/items.json'

const Item = ( { callbackName, price, timeOfSale } ) => {
  const itemName = callbackName.slice(3)

  return(
    <div className='flex flex-row gap-4 items-center justify-center'>
      <img src={`https://render.albiononline.com/v1/item/${callbackName}`} className='w-16 h-16' />
      <p className='text-3xl'>{itemsData[itemName]}</p>
      <p className='text-3xl'>{price}</p>
      <p className='text-3xl'>{DateFromNow(timeOfSale)}</p>
    </div>
  )
}

export default Item;