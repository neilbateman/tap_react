import React, {useState, useContext, useEffect} from 'react';
import{ Paper, Grid, Container, FormControl, Button }from '@material-ui/core';
import {KegContext} from './KegContext';
import {v4} from 'uuid';
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
        setKegs(prevKegs => [...prevKegs, {type: type, brand: brand, pints: pints, price: price, abv: abv, id: v4()}])
    };

    return(
        <div>
        <Container>
        <Paper>
        <h2>Specialty Keg Order Form</h2>
        <form onSubmit={AddKeg}>
            <input type="text" name="type" value={type} onChange={updateType} placeholder="Type of beverage"/>
            <input type="text" name="brand" value={brand} onChange={updateBrand} placeholder="Brand"/>
            <input type="number" name="pints" value={pints} onChange={updatePints} placeholder="Amount in Pints" min="0" max="100"/>
            <input type="number" name="price" value={price} onChange={updatePrice} placeholder="Price" min="0" max="100"/>
            <input type="number" name="abv" value={abv} onChange={updateAbv} placeholder="ABV" min="0" max="100"/>
            <button>Submit</button>
        </form>
        </Paper>
        </Container>
        </div>
    );
};
export default AddKeg;
