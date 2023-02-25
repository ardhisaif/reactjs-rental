import './search.css'

function Search() {
  return (
    <div className='search-container'>
        <input type="search" placeholder="Search vehicle (ex. cars, cars name)"></input>
        <div className='search-logo'>
        </div>
    </div>
  )
}

export default Search;