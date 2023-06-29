import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './IndividualCity.css'
import { CityContext } from '../../../Context/CityContext';

export default function IndividualCity() {

    const path = process.env.PUBLIC_URL;

    const { id } = useParams()
    const [properties, setProperties] = useState()

    const {cities} = useContext(CityContext)
    
    
    
    // const newArr = cities?.filter( item =>  
    //     properties.some(property => item.name === property.address.city)
    // )
    
    // console.log(newArr)
    
    const getIndividualCity = () =>{
        axios.get(`https://unilife-server.herokuapp.com/properties/city/${id}`)
        .then(result=>setProperties(result.data.response))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getIndividualCity()
        // eslint-disable-next-line
    }, [])
    
    console.log(cities)
    console.log(properties)

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
                                        <img className='propery-stats-image' src={path + '/assets/bedroom-icon.png'} alt='bedroom-icon'></img>
                                        <p>{property.bedroom_count}</p>
                                    </div>
                                    <div className='bathroom-count'>
                                        <img className='propery-stats-image' src={path+ '/assets/bathroom-icon.png'} alt='bathroom-icon'></img>
                                        <p>{property.bathroom_count}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='property-description'>
                                <div className='property-type'>
                                    <h4 className='property-h4-text'>{property.property_type}</h4>
                                    <h4 className='property-h4-text'>{property.furnished}</h4>
                                </div>
                                <div className='location'>
                                    <img className='map-pin' src={path + '/assets/map-pin.png'} alt='location-pin'></img> 
                                    <p className='label'>{`${property.address.street}, ${property.address.city}, ${property.address.postcode}`}</p>
                                </div>
                            </div>
                            <div className='view-home'>
                                <img src='' alt=''></img>
                                <p>View Home</p>
                            </div>
                        </div>
                    )}
                </div>
                            <div className='life-in-city'>
                                <div className='being_a_student_text'>
                                    <h3>Being a student in <i style={{textDecoration: 'underline'}}>A City</i></h3>
                                    <p>{cities[1].student_life}</p>
                                    {/* {cities?.filter( item =>{properties.some(property => property.name === item.address.city)})} */}
                                </div>
                                <div className='students_photo'>
                                    <img className='group_photo' src={path + '/assets/group-photo.png'} alt=''></img>
                                </div>
                            </div>
            </div>
    )
}
