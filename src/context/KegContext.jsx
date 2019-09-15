import React, {useState, createContext} from 'react';
import { kegData } from '../crud/Main';


export let KegContext = createContext();
export let KegProvider = props => {
    let [kegs, setKegs] = useState([
      { id: 1, type: 'Beer', brand: 'Tecate' },
      { id: 2, type: 'Tequila', brand: 'Mescale' },
      { id: 3, type: 'Cider', brand: 'Angry Orchard' },
    ]);
    return(
        <KegContext.Provider value={[kegs, setKegs]}>
            {props.children}
        </KegContext.Provider>
    );
}
