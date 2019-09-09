import React, {useState, useContext} from 'react';
import {KegContext} from './KegContext';

const AddKeg = () => {
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');
    const [pints, setPints] = useState('');
    const [price, setPrice] = useState('');
    const [abv, setAbv] = useState('');
    const [kegs, setKegs] = useContext(KegContext);

    const updateType = (e) => {
        setType(e.target.value);
    };
    const updateBrand = (e) => {
        setBrand(e.target.value);
    };
    const updatePints = (e) => {
        setPints(e.target.value);
    };
    const updatePrice = (e) => {
        setPrice(e.target.value);
    };
    const updateAbv = (e) => {
        setAbv(e.target.value);
    };

    const AddKeg = e => {
        e.preventDefault();
        setKegs(prevKegs => [...prevKegs, {type: type, brand: brand, pints: pints, price: price, abv: abv}])

    };

    return(
        <div>
        <h6>Add A Keg</h6>
        <form onSubmit={AddKeg}>
            <input type="text" name="type" value={type} onChange={updateType}/>
            <input type="text" name="brand" vaule={brand} onChange={updateBrand}/>
            <input type="number" name="pints" vaule={pints} onChange={updatePints}/>
            <input type="number" name="price" vaule={price} onChange={updatePrice}/>
            <input type="number" name="abv" vaule={abv} onChange={updateAbv}/>
            <button>Submit</button>
        </form>
        </div>
    );
};

export default AddKeg;
