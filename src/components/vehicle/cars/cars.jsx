import Card from '../../cards/card';
import './cars.css'

function Cars() {
  return (
    <div>
        <div className='popular-container'>
            <div className='popular'>Cars</div>
            <div className='view'> View all</div>
        </div>
        <div className='card-container'>
            <Card image={'van.png'} header={'Van'} text={'Yogyakarta'}/>
            <Card image={'lamborghini.png'} header={'Lamborghini'} text={'South Jakarta'}/>
            <Card image={'jeep2.png'} header={'Jeep'} text={'Malang'}/>
            <Card image={'white_jeep.png'} header={'White Jeep'} text={'Kalimantan'}/>
        </div>
    </div>
    
  )
}

export default Cars;