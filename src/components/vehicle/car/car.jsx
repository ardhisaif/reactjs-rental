import Card from '../../cards/card';
import React, { useEffect, useState } from 'react'
import './car.css'
import axios from 'axios';

function Car() {
  const [Cars, setCar] = useState([])

    const getCar = async () => {
        try {
            const {data} = await axios.get('http://localhost:3001/vehicle/type?name=car')
            setCar(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getCar()
    }, [])

  return (
    <div>
        <div className='popular-container'>
            <div className='popular'>Car</div>
            <div className='view'> View all</div>
        </div>
        <div className='card-container'>
          {Cars.data?.map((v) => {
            return( 
              <Card
                image={v.image} 
                header={v.name} 
                text={v.location}/>
            )
          })}
        </div>
    </div>
  )
}

export default Car;