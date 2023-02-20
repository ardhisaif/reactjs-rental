import Cards from '../cards/cards';
import './style.css'

function Popular() {
  return (
    <div>
        <div className='popular-container'>
            <div className='popular'>Popular in town</div>
            <div className='view'> View all</div>
        </div>
        <Cards/>
    </div>
  )
}

export default Popular;