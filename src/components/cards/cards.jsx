import Card from './card';
import './card.css'

function Cards(props) {
  return (
    <div className='card-container'>
        <Card image={'van.png'} header={'Merapi'} text={'Yogyakarta'} />
        <Card image={'motor.png'} header={'Teluk Bogam'} text={'Kalimantan'} />
        <Card image={'jeep2.png'} header={'Bromo'} text={'Malang'} />
        <Card image={'bike.png'} header={'Malioboro'} text={'Yogyakarta'} />
    </div>
  )
}

export default Cards;