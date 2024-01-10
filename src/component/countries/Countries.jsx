import React from 'react';

import CountryCard from '../country/CountryCard';
import './countries.css'

class Countries extends React.Component{
    render(){
        const {countries, showModalInfo} = this.props

        return (
            <div className="container">
                {
                    countries ? countries.map((country, id) => {
                        const {flags, name, population, region, capital} = country
                        return <CountryCard key = {id} id = {id} flags = {flags} countryName = {name} population = {population} region = {region} capital = {capital} showModalInfo = {showModalInfo} />
                    }) : <div className='error'>Not Found</div>
                }
            </div>
        )
    }
}

export default Countries