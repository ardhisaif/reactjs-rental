import './style.css'

function Testi() {
  return (
    <div className='testi-container'>
      <div className='testi-display'>
        <div>
          <div className='popular'>
              Testimonials
          </div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div className='stars'>            
              <span className="fa fa-star checked fa-2x"></span>
              <span className="fa fa-star checked fa-2x"></span>
              <span className="fa fa-star checked fa-2x"></span>
              <span className="fa fa-star checked fa-2x"></span>
              <span className="fa fa-star checked fa-2x"></span>
          </div>
          <div className='content'>
            ”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing experience to have a ride for wildlife trip!”
          </div>
          <div className='name'>Edward Newgate</div>
          <div className='sub-name'>Founder Circle</div>
        </div>
        <div className='photo-testi'>
          <div className='photo-arrow'>
            <div className='ellipse-left'></div>
            <div className='ellipse'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testi;