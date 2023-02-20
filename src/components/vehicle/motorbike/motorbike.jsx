import Card from "../../cards/card";

function Motorbike() {
  return (
    <div>
        <div className='popular-container'>
            <div className='popular'>Motorbike</div>
            <div className='view'> View all</div>
        </div>
        <div className='card-container'>
            <Card image={'vespa.png'} header={'Vespa'} text={'Yogyakarta'}/>
            <Card image={'motor.png'} header={'Honda KLX'} text={'Kalimantan'}/>
            <Card image={'honda.png'} header={'Honda'} text={'Malang'}/>
            <Card image={'matic.png'} header={'Matic Bike'} text={'Yogyakarta'}/>
        </div>
    </div>
  )
}

export default Motorbike;