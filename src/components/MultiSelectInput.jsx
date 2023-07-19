import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import itemsData from '../helpers/items.json'

export default function MultiSelectInput( { setQueryArray } ) {
  const animatedComponents = makeAnimated();

  const selectOptions = itemsData.map(item => ({
    value: item.query,
    label: item.name
  }))

  const handleChange = (selectedOptions) => {
    setQueryArray(selectedOptions)
  }

  return(
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={selectOptions}
      onChange={handleChange}
      className='w-4/4 mb-4'
    />
  )
}