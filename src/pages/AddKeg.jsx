import React from 'react';

export default function AddKeg(props) {
    let _type = null;
    let _brand = null;
    let _pints = null;
    let _price = null;
    let _abv = null;

    function handleSubmit(e){
        e.preventDefault();
        props.addKeg({type: _type.value, brand: _brand.value, pints: _pints.value, price: _price.value, abv: _abv.value})
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input
          type='text'
          id='type'
          placeholder='Drink Type'
          ref={(input) => {_type = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Brand Name'
          ref={(input) => {_brand = input;}}/>
        <input
          type ='number'
          id='pints'
          placeholder='Amount of Pints'
          ref={(input) => {_pints = input;}}/>
        <input
          type ='number'
          id='price'
          placeholder='price'
          ref={(input) => {_price= input;}}/>
        <input
          type ='number'
          id='abv'
          value='124'
          ref={(input) => {_abv = input;}}/>
        <button onClick={this.handleConfirmation} type='submit'>Add it</button>
      </form>
    </div>
  );
    




}
