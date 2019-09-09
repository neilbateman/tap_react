import React from 'react';
import NewKegForm from './NewKegForm'; 


export class StatelyKegStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statelyKegStore: [
                {
                    type: 'Beer',
                    brand: 'Tecate',
                    pints: 100,
                    price: 2,
                    abv: 5
                },
                {
                    type: 'Cider',
                    brand: 'Angry Orchard',
                    pints: 200,
                    price: 2,
                    abv: 6
                },
                {
                    type: 'Beer',
                    brand: 'Modelo',
                    pints: 100,
                    price: 2,
                    abv: 5
                },
                {
                    type: 'Tequila',
                    brand: 'Mescale',
                    pints: 100,
                    price: 50,
                    abv: 40
                },
            ]
        };
        this.addKeg = this.addKeg.bind(this);
    }
    addKeg(keg){
        this.state.statelyKegStore.push(keg);
        this.setState(this.state.statelyKegStore);
    }
    render(){
        return(
            <NewKegForm addKeg={this.addKeg} statelyKegStore={this.state.statelyKegStore}/>
        )
    }
}