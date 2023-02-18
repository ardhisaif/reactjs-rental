import Card from '../cards/card';
import Testi from '../testimonial/testi';
import './style.css'

function Popular() {
  return (
    <div>
        <div className='popular-container'>
            <div className='popular'>Popular in town</div>
            <div className='view'> View all</div>
        </div>
        <Card />
        <Testi />
    </div>
  )
}

export default Popular;