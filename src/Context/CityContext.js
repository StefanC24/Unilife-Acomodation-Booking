import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const  CityContext = createContext() 

const CityContextProvider = (props)=>{
    
    const [cities, setCity] = useState()

    useEffect(()=>{
        axios.get(`https://unilife-server.herokuapp.com/cities?limit=100`)
        .then(result => setCity(result.data.response))
    },[])

    const context = {cities}

    return(
        <CityContext.Provider value={context}>
            {props.children}
        </CityContext.Provider>
    )
}

export default CityContextProvider