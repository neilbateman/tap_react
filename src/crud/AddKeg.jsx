import React, { useState } from 'react'

const AddKeg = props => {
  const initialFormState = { id: null, type: '', brand: '' }
  const [keg, setKeg] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setKeg({ ...keg, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!keg.type || !keg.brand) return

        props.addKeg(keg)
        setKeg(initialFormState)
      }}
    >
      <label>Type</label>
      <input type="text" name="type" value={keg.type} onChange={handleInputChange} required/>
      <label>Brand</label>
      <input type="text" name="brand" value={keg.brand} onChange={handleInputChange} required/>
      <button>Add new keg</button>
    </form>
  )
}

export default AddKeg
