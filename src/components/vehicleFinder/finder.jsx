import './style.css'

function Finder() {
  return (
    <div className='image'>
        <div className='title'>
            Explore and 
            <br />
            Travel
        </div>
        <div className='finder'>
            Vehicle Finder
        </div>
        <div className='line'>
            <hr />
        </div>
        <div>
            <form action="">
                <input type="text" placeholder='Location' className='form-input'/>
                <input type="text" placeholder='Type'/><br />
                <input type="text" placeholder='Payment' className='form-input'/>
                <input type="text" placeholder='Date'/><br />
                <input type="submit" value="Explore"></input>
            </form>
        </div>
    </div>
  )
}

export default Finder;