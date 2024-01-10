import React from 'react';

import './countryCard.css'

class CountryCard extends React.Component{
    render(){
        const {id, flags, countryName, population, region, capital, showModalInfo} = this.props

        return (
            <div className="card" onClick={() => showModalInfo(id)}>
                {
                    flags? <img src={flags.png} alt={countryName.common} height="160px" /> : <div className='no-photo'>NO PHOTO</div>
                }
                
                <div className="card_text">
                    <h5>{countryName.common}</h5>
                    <ul className='info'>
                        <li><span>Population:</span> {population.toLocaleString("en-US")}</li>
                        <li><span>Region:</span> {region}</li>
                        <li><span>Capital:</span> {capital || 'Unknown'}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CountryCard