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
            id: 12345,
            imageUrl: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjAp-X4_s7kAhUQHTQIHa_9AkQQjRx6BAgBEAQ&url=https%3A%2F%2Ftecatebeerusa.com%2F&psig=AOvVaw3yDU8xl_Fcoevi_7de5sfX&ust=1568505091733918",

        },
        {
            type: 'Cider',
            brand: 'Angry Orchard',
            pints: 9,
            price: 2,
            abv: 6,
            id: 2345,
            imageUrl: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjB1evv_s7kAhVoJzQIHVrADlwQjRx6BAgBEAQ&url=https%3A%2F%2Fdrizly.com%2Fcider%2Fangry-orchard-crisp-apple-cider%2Fp692&psig=AOvVaw0mI93IVR_9g7duDbLS2ZMH&ust=1568505070683692",
        },
        {
            type: 'Beer',
            brand: 'Modelo',
            pints: 1020,
            price: 2,
            abv: 5,
            id: 958493,
            imageUrl: "https://www.shutterstock.com/image-photo/llano-txsept-29-2015-cold-bottle-322058549",
        },
        {
            type: 'Tequila',
            brand: 'Mescale',
            pints: 1,
            price: 50,
            abv: 40,
            id: 12365,
            imageUrl: "https://d256619kyxncpv.cloudfront.net/gui/img/2019/07/05/11/2019070511_olmeca_altos_tequila_reposado_shadow_original.png",
        },
    ]);
    return(
        <KegContext.Provider value={[kegs, setKegs]}>
            {props.children}
        </KegContext.Provider>
    );
}
