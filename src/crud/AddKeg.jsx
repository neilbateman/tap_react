import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

const AddKeg = props => {
  const initialFormState = { id: null, type: '', brand: '' }
  const [keg, setKeg] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target
    setKeg({ ...keg, [name]: value })
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!keg.type || !keg.brand)
        return props.addKeg(keg)
        setKeg(initialFormState)
      }}
    >
      <label>Type</label>
      <input type="text" name="type" value={keg.type} onChange={handleInputChange} />
      <label>Brand</label>
      <input type="text" name="brand" value={keg.brand} onChange={handleInputChange} />
      <Button>Add new keg</Button>
    </form>
  );
}

export default AddKeg;
