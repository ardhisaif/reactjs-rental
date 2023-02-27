import Card from '../cards/card';
import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';

function Popular() {
  const [populars, setPopular] = useState([])

    const getPopular = async () => {
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_BASEURL}/vehicle/popular`)
            setPopular(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getPopular()
    }, [])

  return (
    <div>
      <div className='popular-container'>
          <div className='popular'>Popular in town</div>
          <div className='view'> View all</div>
      </div>
      <div className='card-container'>
        {populars.data?.map((v) => {
          return( 
            <Card
              key={v.id}
              image={v.image} 
              header={v.name} 
              text={v.location}
              id={v.id}
              />
          )
        })}
      </div>
    </div>
  )
}

export default Popular;