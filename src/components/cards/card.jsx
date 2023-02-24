import './card.css'

function Card(props) {
  return (
    <div style={{ 
      backgroundImage: `url(${props.image})`
    }}  className='card1'>
      <div className='card-title'>
        <div className='text1'>{props.header}</div>
        <div className='text2'>{props.text}</div>
      </div>
    </div>
  )
}

export default Card;