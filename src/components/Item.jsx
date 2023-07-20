import DateFromNow from "../utils/DateFromNow";

const Item = ( { name, price, timeOfSale } ) => {

  return(
    <div className='flex flex-row gap-4 items-center justify-center'>
      <img src={`https://render.albiononline.com/v1/item/${name}`} className='w-16 h-16' />
      <p className='text-3xl'>{name}</p>
      <p className='text-3xl'>{price}</p>
      <p className='text-3xl'>{DateFromNow(timeOfSale)}</p>
    </div>
  )
}

export default Item;