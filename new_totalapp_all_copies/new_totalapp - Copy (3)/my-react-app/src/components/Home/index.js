import './index.css'
import {Component} from 'react';
import Header from '../Header/index'
import Address from '../Address/index'
class Home extends Component{
    render(){
        return (
            <div>
                <Header/>
                <input type="search" className="searchbar-css"/>
                <Address/>
            </div>
        )
    }
}
export default Home;