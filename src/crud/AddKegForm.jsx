import React, { useState } from 'react';

const AddKegForm = props => {

  const initialFormState = { id: null, type: '', brand: ''};
  const [keg, setKeg] = useState(initialFormState);

  const handleInputChange = event => {
    const { type, value } = event.target
      setKeg({...keg, [type]: value})
  }
  return (
    <form
    >
      <label>Type</label>
      <input type="text" name="type" value={keg.type} onChange={handleInputChange} />
      <label>Brand</label>
      <input type="text" name="brand" value={keg.brand} onChange={handleInputChange} />
      <button>Add new user</button>
    </form>
  )
};

export default AddKegForm;
