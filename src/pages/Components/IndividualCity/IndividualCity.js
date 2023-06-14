import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './IndividualCity.css'

export default function IndividualCity() {

    const path = process.env.PUBLIC_URL;

    const { id } = useParams()
    const [properties, setProperties] = useState()

    const getIndividualCity = () =>{
        axios.get(`https://unilife-server.herokuapp.com/properties/city/${id}`)
        .then(result=>setProperties(result.data.response))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getIndividualCity()
        // eslint-disable-next-line
    }, [])
    
    return (
            <div className='results'>
                <h4 className=''>{`${properties?.length} homes in Leeds`}</h4>
                <div className='properties'>
                    {properties?.map(property => 
                        <div className='property' key={property._id}>
                            <img className='propery-image' src={property.images[0]} alt={property.property_type}></img>
                            <div className='property-stats'>    
                                <p>{`£${property.rent}`}</p>
                                <div className='bath-bedroom-count'>
                                    <div className='bedroom-count'>
                                        <img src={path + '/assets/bedroom-icon.png'} alt='bedroom-icon'></img>
                                        <p>{property.bedroom_count}</p>
                                    </div>
                                    <div className='bathroom-count'>
                                        <img src={path+ '/assets/bathroom-icon.png'} alt='bathroom-icon'></img>
                                        <p>{property.bathroom_count}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='property-description'>
                                <div className='property-type'>
                                    <h4>{property.property_type}</h4>
                                    <h4>{property.furnished}</h4>
                                </div>
                                <img className='map-pin' src={path + '/assets/map-pin.png'} alt='location-pin'></img> 
                                <label>{`${property.address.street}, ${property.address.city}, ${property.address.postcode}`}</label>
                            </div>
                        </div>
                    )}
                </div>
            </div>
    )
}
