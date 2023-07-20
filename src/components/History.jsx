import Item from './Item';

const History = ( { items } ) => {

  return(
    items.length > 0 && (
      console.log(items),
      items.map(data => (
        <Item
          key={data.item_id}
          callbackName={data.item_id}
          price={data.sell_price_min}
          timeOfSale={data.sell_price_min_date}
        />
      ))
    )
  )
}

export default History;