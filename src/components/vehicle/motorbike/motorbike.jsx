import Card from '../../cards/card';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Motorbike() {
  const [Motorbikes, setMotorbike] = useState([])

    const getMotorbike = async () => {
        try {
            const {data} = await axios.get('http://localhost:3001/vehicle/type?name=motorbike')
            setMotorbike(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getMotorbike()
    }, [])

  return (
    <div>
        <div className='popular-container'>
            <div className='popular'>Motorbike</div>
            <div className='view'> View all</div>
        </div>
        <div className='card-container'>
          {Motorbikes.data?.map((v) => {
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

export default Motorbike;