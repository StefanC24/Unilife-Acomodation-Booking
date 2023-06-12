import React from 'react'
import Header from '../Header'
import axios from 'axios'

export default function AllCities() {
    
    const [cities, setCities] = React.useState([])

    const fetchCities = () => {
        axios.get('https://unilife-server.herokuapp.com/cities?limit=20')
        .then(result => setCities(result.data.response))
        .catch(err => console.log(err))
    }

    React.useEffect(() => {
        fetchCities()
    }, [cities])

  return (
    <div>
        <Header />
        <h3>Search by city</h3>
        {cities.map(city => <p>{city.name}</p>) }
    </div>
  )
}
