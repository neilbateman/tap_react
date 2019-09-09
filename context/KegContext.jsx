import React, {useState, createContext} from 'react';


export const KegContext = createContext();
export const KegProvider = props => {
    const [movies, setMovies] = useState([
        {
            type: 'Beer',
            brand: 'Tecate',
            pints: 100,
            price: 2,
            abv: 5,
            id: 12345
        },
        {
            type: 'Cider',
            brand: 'Angry Orchard',
            pints: 200,
            price: 2,
            abv: 6,
            id: 2345
        },
        {
            type: 'Beer',
            brand: 'Modelo',
            pints: 100,
            price: 2,
            abv: 5,
            id: 958493
        },
        {
            type: 'Tequila',
            brand: 'Mescale',
            pints: 100,
            price: 50,
            abv: 40,
            id: 12365
        },
    ]);
    return(
        <KegContext.Provider value={[movies, setMovies]}>
            {props.children}
        </KegContext.Provider>
    );
}