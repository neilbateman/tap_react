import React, {useState, createContext} from 'react';
import { kegData } from '../crud/Main';


export let KegContext = createContext();
export let KegProvider = props => {
    let [kegs, setKegs] = useState([
      { id: 1, type: 'Beer', brand: 'Tecate', price: 1, abv: 5, pints: 200 },
      { id: 2, type: 'Tequila', brand: 'Mescale', price: 50, abv: 40, pints: 20 },
      { id: 3, type: 'Cider', brand: 'Angry Orchard', price: 3, abv: 6, pints: 50 },
    ]);
    return(
        <KegContext.Provider value={[kegs, setKegs]}>
            {props.children}
        </KegContext.Provider>
    );
}
