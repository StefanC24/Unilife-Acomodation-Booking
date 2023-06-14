import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './IndividualCity.css'

export default function IndividualCity() {

    const { id } = useParams()
    const [properties, setProperties] = useState()

    const getIndividualCity = () =>{
        axios.get(`https://unilife-server.herokuapp.com/properties/city/${id}`)
        .then(result=>setProperties(result.data.response))

    }

    console.log(properties)

    useEffect(()=>{
        getIndividualCity()
        // eslint-disable-next-line
    }, [])
    
    return (
        <div className='properties'>
            {properties?.map(property => 
                <div className='property' key={property._id}>
                    <img className='propery-image' src={property.images[0]} alt={property.property_type}></img>
                    <p>{property.property_type}</p>
                </div>
            )}
        </div>
    )
}
