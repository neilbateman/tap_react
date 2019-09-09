import React from 'react';

export default function NewKeg(props) {
    let _type = null;
    let _brand = null;
    let _price = null;
    let _abv = null;

    function handleNewKegSubmit(e) {
        e.preventDefault();
        props.addKeg({type: _type.value, brand: _brand.value, price: _price.value, abv: _abv.value});
        
    }

    return (
        <div>
            <form onSubmit={handleNewKegSubmit}>
                <input
                    type='text'
                    id='type'
                    placeholder='Drink Type'
                    ref={(input) =>{_type = input;}}/>
                <input
                    type='text'
                    id='brand'
                    placeholder='Drink Brand'
                    ref={(input) =>{_brand = input;}}/>
                <input
                    type='number'
                    id='price'
                    placeholder='Price'
                    ref={(input) =>{_price = input;}}/>
                <input
                    type='number'
                    id='abv'
                    placeholder='ABV'
                    ref={(input) =>{_abv = input;}}/>
                <button onClick type='submit'>Submit</button>         
            </form>
        </div>
    );
}