import {Link } from 'react-router-dom';
import {BagIcon} from './BagIcon'
import {useSelector} from 'react-redux'

const Header = () => {
const{amount} = useSelector((store)=>store.cart);

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center 	bg-purple-300">
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
</svg>

      <span className="ml-3 text-xl">E-Cube</span>
      </Link>
    
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
  <div className="container-md">
    <Link to="/" className="mr-5 hover:text-gray-900">E-Cube</Link>
    <Link to="/upcoming" className="mr-5 hover:text-gray-900">Upcoming Movies</Link>
    <Link to="/latest" className="mr-5 hover:text-gray-900">Latest Movies</Link>
    <Link to="/" className="mr-5 hover:text-gray-900">All Movies</Link>
    <Link to="/event_list" className="mr-5 hover:text-gray-900">Nearby Events</Link>
  </div>
  <div className='relative block'>
 <Link to="/cart">  
  <BagIcon/>
  <div className="absolute -top-2.5 -right-2.5 w-5 h-5 flex items-center justify-center content-center rounded-full bg-indigo-300 ">
     <p className="mb-0 text-lg text-white " >{amount}</p>
        
            </div>
          </Link>     
     {/* <div className="amount-container">
     <p className="total-amount" >{amount}</p>
        
            </div>    */}
    </div>   
</nav>
</div>
        </header>
    )
}

export default Header