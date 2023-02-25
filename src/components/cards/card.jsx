import './card.css'
import {Link} from 'react-router-dom'

function Card(props) {
  return (
    <div style={{backgroundImage: `url(${props.image})` }}  className='card1'>
      <Link to={`http://localhost:3000/vehicle/${props.id}`}>
          <div className='card-title'>
            <div className='text1'>{props.header}</div>
            <div className='text2'>{props.text}</div>
          </div>
      </Link>
    </div>
  )
}

export default Card;