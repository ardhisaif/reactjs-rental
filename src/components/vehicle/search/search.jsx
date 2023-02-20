import './search.css'

function Search() {
  return (
    <div className='search-container'>
        <input type="search" placeholder="Search vehicle (ex. cars, cars name)"></input>
        <div className='search-logo'>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 33L25.75 25.75M29.6667 16.3333C29.6667 23.6971 23.6971 29.6667 16.3333 29.6667C8.96954 29.6667 3 23.6971 3 16.3333C3 8.96954 8.96954 3 16.3333 3C23.6971 3 29.6667 8.96954 29.6667 16.3333Z" stroke="#393939" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
  )
}

export default Search;