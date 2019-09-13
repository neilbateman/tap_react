import React, {useState, createContext} from 'react';


export let KegContext = createContext();
export let KegProvider = props => {
    let [kegs, setKegs] = useState([
        {
            type: 'Beer',
            brand: 'Tecate',
            pints: 345,
            price: 2,
            abv: 5,
            id: 12345
        },
        {
            type: 'Cider',
            brand: 'Angry Orchard',
            pints: 9,
            price: 2,
            abv: 6,
            id: 2345
        },
        {
            type: 'Beer',
            brand: 'Modelo',
            pints: 1020,
            price: 2,
            abv: 5,
            id: 958493
        },
        {
            type: 'Tequila',
            brand: 'Mescale',
            pints: 1,
            price: 50,
            abv: 40,
            id: 12365
        },
    ]);
    return(
        <KegContext.Provider value={[kegs, setKegs]}>
            {props.children}
        </KegContext.Provider>
    );
}