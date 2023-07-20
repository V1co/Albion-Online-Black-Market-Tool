import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import itemsData from '../helpers/items.json'

export default function MultiSelectInput( { setQueryArray } ) {
  const animatedComponents = makeAnimated();

  const selectOptions = Object.entries(itemsData).map(([k, v]) => ({
    value: k,
    label: v
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