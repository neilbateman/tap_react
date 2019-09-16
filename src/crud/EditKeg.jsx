import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';

const EditKeg = props => {
  const [keg, setKeg] = useState(props.currentKeg);
  const handleInputChange = event => {
    const { name, value } = event.target
    setKeg({ ...keg, [name]: value })
  };
  useEffect(() => {
    setKeg(props.currentKeg)
  }, [props]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateKeg(keg.id, keg)
      }}
    >
      <label>Type</label>
      <input type="text" name="type" value={keg.type} onChange={handleInputChange} />
      <label>Brand</label>
      <input type="text" name="brand" value={keg.brand} onChange={handleInputChange} />
      <Button>Update Keg</Button>
      <Button onClick={() => props.setEditing(false)}>Cancel</Button>
    </form>
  )
};

export default EditKeg;
