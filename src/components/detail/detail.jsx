import './style.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react'

function Details() {
    let {id} = useParams()
    const [details, setDetail] = useState([])

    const getDetail = async () => {
        try {
            const {data} = await axios.get(`http://localhost:3001/vehicle/${id}`)
            setDetail(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDetail()
    },[0])  // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='detail-container'>
            <div className='detail-head'>
                <div className='arrow'></div>
                <div className='detail-title'>Detail</div> 
            </div>
            <div className='detail-body'>
                <div className='image-container'>
                    <div className='detail-image' style={{backgroundImage:`url(${details.image})`}}></div>
                    <div className='child-image'>
                        <div className='arrow-left'></div>
                        <div className='image-list' style={{backgroundImage:`url(${details.image})`}}> </div>
                        <div className='image-list' style={{backgroundImage:`url(${details.image})`}}> </div>
                        <div className='arrow-right'></div>
                    </div>
                </div>
                <div className='detail-text-container'>
                    <div className='vehicle-title'>{details.name}</div>
                    <div className='vehicle-subtitle'>{details.location} </div>
                    <div className='available'>Available</div>
                    <div className='prepayment'>No Prepayment</div>
                    <div className='vehicle-description'>
                        Capacity : {details.capacity} <br />
                        Type : {details.type} <br />
                        Reservation before 2 PM
                    </div>
                    <div className='price'>Rp.{details.price}/day</div>
                    <div className='quantity'>
                        <div id='increment'>+</div>
                        <div>2</div>
                        <div id='decrement'>-</div>
                    </div>
                </div>
            </div>
            <div className='detail-button'>
                <div id='chat'>Chat Admin</div>
                <div id='reservation'>Reservation</div>
                <div id='like'>Like</div>
            </div>
        </div>
    )
}

export default Details;