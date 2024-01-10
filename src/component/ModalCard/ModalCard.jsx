import React from 'react';
import './modalcard.css'


class ModalCard extends React.Component{
    render(){
        const {flags, countryName, population, region, subregion, capital, domain, currencies, languages, borderCountries, closeModal} = this.props

        return (
            <div className="info-modal">
                <div className="modal-container">
                <svg className="close-modal" onClick={closeModal} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.41187" y="0.00012207" width="31.9446" height="1.99654" transform="rotate(45 1.41187 0.00012207)" />
<rect y="22.5883" width="31.9446" height="1.99654" transform="rotate(-45 0 22.5883)" />
</svg>

                    <div className="flag">
                        {
                            flags? <img src={flags.png} alt={countryName.official} /> : <div className='no-photo'>NO PHOTO</div>
                        }
                    </div>
                    <div className="country-info">
                        <h5 className='countryName'>{countryName.official}</h5>
                        <ul className='ul'>
                            <li><span>Native Name:</span> {
                                Object.values(countryName.nativeName).map(item => {
                                    return item.official
                                }).join(' | ')
                            }</li>
                            <li><span>Population:</span> {population.toLocaleString("en-US")}</li>
                            <li><span>Region:</span> {region}</li>
                            <li><span>Sub Region:</span> {subregion}</li>
                            <li className='country-capital'><span>Capital:</span> {capital}</li>
                            
                            <li><span>Top Level Domain:</span> {
                                Object.values(domain).map(item => {
                                    return item
                                }).join(' | ')
                            }</li>
                            <li><span>Currencies:</span> {
                                Object.values(currencies).map(item => {
                                    return item.name
                                }).join(' | ')
                            }</li>
                            <li><span>Languages:</span> {
                                Object.values(languages).map(item => {
                                    return item
                                }).join(' | ')
                            }</li>
                         </ul>
                        { borderCountries && <div className="border-countries"><p>Border Countries:</p>{
                                borderCountries.map(item => {
                                    return <span>{item}</span>
                                })
                             } </div>
                            }
                    </div>
                </div>
                </div>
            
        )
    }
}

export default ModalCard