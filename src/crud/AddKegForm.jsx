import React, { useState } from 'react';

const AddKegForm = props => {
  return (
    <form>
      <label>Type</label>
      <input type="text" name="type" value="" />
      <label>Brand</label>
      <input type="text" name="brand" value="" />
      <button>Add new user</button>
    </form>
  )
};

export default AddKegForm;
