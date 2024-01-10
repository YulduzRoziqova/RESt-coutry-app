import React from "react"
import Searches from "../search/Searches"
import Countries from "../countries/Countries"
import ModalCard from "../ModalCard/ModalCard"
import './main.css'

class Main extends React.Component{
    state = {
        allCountries: null,
        countries: null,
        region: null,
        country: null,
        countrysList: null,
        countriesNumber: 16
    }

    componentDidMount(){
        this.showAllCountries()
    }

    showAllCountries = (regionName) => {
        if(regionName && regionName !== ('All')){
            fetch(`https://restcountries.com/v3.1/region/${regionName}`)
                .then(response => response.json())
                .then(data => {
                    const firstCountries = data.slice(0, 8)
                    this.setState((prevstate) => {
                        if(prevstate.region !== regionName){
                            return{
                                allCountries: data,
                                countries: firstCountries
                            }
                        }else{
                            return{
                                allCountries: data,
                                countries: firstCountries
                            }
                        }
                    })
                }
            )
        }else{
            fetch('https://restcountries.com/v3.1/all')
                .then(response => response.json())
                .then(data => {
                    const firstCountries = data.slice(0, 8)
                    this.setState((prevstate) => {
                        return{
                            allCountries: data,
                            countries: firstCountries
                        }
                    })
                }
            )
        }
    }
    closeModal = () => {
        this.setState({country: null})
    }
    
    showMoreCountry = () => {
        const {allCountries, countriesNumber} = this.state
        const moreCountries = allCountries.slice(0, countriesNumber)
        this.setState((prevstate) => {
            return{
                countries: moreCountries,
                countriesNumber: prevstate.countriesNumber + 8
            }
        })
    }

    changeCountriesRegion = (regionName) => {
        this.setState(() => {
            return{
                region: regionName,
                countriesNumber: 16
            }
        })
        this.showAllCountries(regionName)
    }

    showModalInfo = (id) => {
        const {countries} = this.state
        this.setState({country: countries[id]})
    }


    searchCountry = (e) => {
        const {allCountries, region} = this.state
        let value = e.target.value

        if(value === ""){
            this.showAllCountries(region)
        }else{
            let data = allCountries.filter((item) => {
                const {name} = item
                const {common} = name
                return (common.slice(0, 1) + common.slice(1)).toLowerCase().startsWith(value.toLowerCase())
            }
            this.setState({countries: data})
        }
    }

    render(){
        const {countries, region, country} = this.state

        return (
            <main>
                <Searches changeCountriesRegion = {this.changeCountriesRegion} region = {region}  searchCountry ={this.searchCountry}/>
                <Countries countries = {countries} showModalInfo = {this.showModalInfo} /> 
                {
                     country && <ModalCard closeModal = {this.closeModal} flags = {country.flags} countryName = {country.name} population = {country.population} region = {country.region} subregion = {country.subregion} capital = {country.capital} domain = {country.tld} currencies = {country.currencies} languages = {country.languages} borderCountries = {country.borders}
                     />
                }
                <button className='show-more' type='button' onClick={this.showMoreCountry}>More...</button>
            </main>
        )
    }

}
export default Main