import React, { useEffect } from 'react'
import axios from 'axios'
import Header from '../Components/Header'
import './Homepage.css'

export default function Homepage() {

    const [cities, setCities] = React.useState([])

    const fetchCities = () => {
        axios.get("https://unilife-server.herokuapp.com/cities")
        .then(result => setCities(result.data.response))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchCities()},[])

        console.log(cities)

  return (
    <div className='home-page'>
        <Header style={{zIndex: '-1'}}/>
        <form className='search-form'>
            <select className='search_by_city' type='text' placeholder='Search by city'>
                <option value=''>Search by city</option>
                <option value=''>{cities[0]?.name}</option>
                <option value=''>{cities[1]?.name}</option>
                <option value=''>{cities[2]?.name}</option>
                <option value=''>{cities[3]?.name}</option>
                <option value=''>{cities[4]?.name}</option>
                <option value=''>{cities[5]?.name}</option>
                <option value=''>{cities[6]?.name}</option>
                <option value=''>{cities[7]?.name}</option>
                <option value=''>{cities[8]?.name}</option>
                <option value=''>{cities[9]?.name}</option>
            </select>
            <button className='find_homes-button'>Find Homes</button>
        </form>


        <div className='cities'>
            
            <h3 className='overview'>Student accomodation in our cities</h3>
                {cities.slice(0, 9).map(city => (
                    <div 
                        className='city-card' 
                        key={city._id} 
                        style={{
                            color: 'white',
                            backgroundImage: `url(${city?.image_url})`, 
                            backgroundSize: 'cover',
                            backdropFilter: 'blur'
                            }}>
                        <div className='city-card-text'>          
                            <h2>{city.name}</h2>
                            <p>{city.property_count} properties</p>
                        </div>
                    </div>
                    ))}
        </div>
        
        <button className='see-all-cities-button'>See all cities</button>

        <div className='why-unilife-container'>
            <h3 className='why-unilife-header'>Compare all inclusive student homes.</h3>
            <div className='why-unilife-children'>
                <div className='search child'>
                    <img className='child-image' src='./assets/search-icon.png' alt='search icon'></img>
                    <h4 className='child-header'>Search</h4>
                    <p className='child-description'>Find your dream home in the perfect area near your university.</p>
                </div>
                <div className='compare child'>
                    <img className='child-image' src='./assets/compare-icon.png' alt=''></img>
                    <h4 className='child-header'>Compare</h4>
                    <p className='child-description'>Compare student accommodation to find the right home for you.</p>
                </div>
                <div className='bills-included child'>
                    <img className='child-image' src='./assets/bills-icon.png' alt=''></img>
                    <h4 className='child-header'>Bills included</h4>
                    <p className='child-description'>Bills are included in all rent prices. No hidden fees.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
