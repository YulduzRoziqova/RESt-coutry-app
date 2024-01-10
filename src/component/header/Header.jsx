import { Component } from "react";
import './header.css';

import lightIcon from '../img/light.svg'
import darkIcon from '../img/moon.svg'

class Header extends Component{
    state = {
        theme: 'light',
        themeIcon: lightIcon,
        themeText: 'Light Mode'
    }

    componentDidMount(){
        if(JSON.parse(localStorage.getItem('theme'))){
            this.setState((prevState) => {
                return{
                    theme: JSON.parse(localStorage.getItem('theme')).theme,
                    themeIcon: JSON.parse(localStorage.getItem('theme')).themeIcon,
                    themeText: JSON.parse(localStorage.getItem('theme')).themeText
                }
            })
        }
    }
    componentDidUpdate(){
        localStorage.setItem('themr', JSON.stringify(this.state))
    }

    changeMode = () => {
        document.querySelector('body').classList.toggle('dark-mode')

        this.setState((prevState) => {
            if(this.state.theme === 'dark'){
                return {
                    theme: 'light',
                    themeIcon: lightIcon,
                    themeText: 'Light Mode'
                }
            }
            else{
                return {
                    theme: 'dark',
                    themeIcon: darkIcon,
                    themeText: 'Dark Mode'
                }
            }
        })
    }

    render(){
        if(this.state.theme === 'dark'){
            document.querySelector('body').classList.add('dark-mode')
        }
        return ( 
            <header>
                <div className="header_container">
                        <a href="index.html" > Where is the world?</a>
                        <p className='mode' onClick={this.changeMode}>
                            <img src={this.state.themeIcon} alt="" />
                            <span>{this.state.themeText}</span>
                        </p>
                        
                </div>
            </header>
        )
    }
}
export default Header;