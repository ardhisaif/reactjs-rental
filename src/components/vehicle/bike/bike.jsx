import Card from "../../cards/card";

function Bike() {
    return (
      <div>
          <div className='popular-container'>
              <div className='popular'>Bike</div>
              <div className='view'> View all</div>
          </div>
          <div className='card-container'>
              <Card image={'fixie.png'} header={'Fixie'} text={'Yogyakarta'}/>
              <Card image={'sport_bike.png'} header={'Sport Bike'} text={'Kalimantan'}/>
              <Card image={'onthel.png'} header={'Onthel'} text={'Malang'}/>
              <Card image={'fixie_grey.png'} header={'Fixie Grey'} text={'Yogyakarta'}/>
          </div>
      </div>
    )
  }
  
  export default Bike;