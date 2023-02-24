import Card from './card';
import './card.css'

function Cards(props) {
  return (
    <div className='card-container'>
        <Card image={props.image} header={'Merapi'} text={'Yogyakarta'} />
        <Card image={props.image} header={'Teluk Bogam'} text={'Kalimantan'} />
        <Card image={props.image} header={'Bromo'} text={'Malang'} />
        <Card image={props.image} header={'Malioboro'} text={'Yogyakarta'} />
    </div>
  )
}

export default Cards;