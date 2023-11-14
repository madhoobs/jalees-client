import * as React from 'react'
import { Checkbox, TextField, Autocomplete } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

const NewSession = () => {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={testChildrenArray}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Children"
          placeholder="Select Children for this session"
        />
      )}
    />
  )
}

const testChildrenArray = [
  { name: 'Hadi' },
  { name: 'Yasmeen' },
  { name: 'Taim' },
  { name: 'Mutayam' }
]

export default NewSession
