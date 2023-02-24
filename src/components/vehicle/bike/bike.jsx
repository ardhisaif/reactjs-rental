import Card from '../../cards/card';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Bike() {
  const [Bikes, setBike] = useState([])

    const getBike = async () => {
        try {
            const {data} = await axios.get('http://localhost:3001/vehicle/type?name=bike')
            setBike(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getBike()
    }, [])

  return (
    <div>
        <div className='popular-container'>
            <div className='popular'>Bike</div>
            <div className='view'> View all</div>
        </div>
        <div className='card-container'>
          {Bikes.data?.map((v) => {
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

export default Bike;