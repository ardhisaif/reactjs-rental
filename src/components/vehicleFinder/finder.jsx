import './finder.css'

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
                <div className='find-input'>
                    <input type="text" placeholder='Location' className='form-input'/>
                    <input type="text" placeholder='Type'/><br />
                    <input type="text" placeholder='Payment' className='form-input'/>
                    <input type="text" placeholder='Date'/><br />
                </div>
                    <input type="submit" id='find-submit' value="Explore"></input>
            </form>
        </div>
    </div>
  )
}

export default Finder;