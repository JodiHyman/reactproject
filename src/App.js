import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header"
import Footer from './components/Footer';
import Home from "./components/Home"
import Hero from "./components/Hero3"
import MovieCard from "./components/Movies/MovieCard"
import MainPage from './components/MainPage';
import UpComing from "./components/upComing";
import Event from "./components/Events/AllEvents"
import NotFound from './components/NotFound';


import Cover from "./components/Poster"
import Order from './components/Order/Order';
import CartContainer from './components/Order/CartContainer';
import MovieDetails from './components/Movies/MovieDetails';
import SubTotal from './components/Order/SubTotal';


const App=() => {
  return (
    
     <BrowserRouter>
     <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/latest" element={<Home />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/upcoming" element={<UpComing />} />
        <Route path="/latest/:_id" element={<Hero />} />
        <Route path="/events/:_id" element={<Hero />} />
        <Route path="/upcomingmovies/:_id" element={<Hero />} />
        <Route path='*' element={<NotFound />}/>
{/* <Route path="/:name" element={<Cover />} /> */}

        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} /> */}
<Route path="/movie_details/:_id" element={<MovieCard />} />
        <Route path="/MovieCard" element={<MovieCard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/event_list" element={<Event />} />

        {/* //cart routes */}
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/cart1" element={<SubTotal />} />
        <Route path="/details" element={<MovieDetails />} />
      </Routes>
       
 <Footer />
    </BrowserRouter>

  
      
     
  );
}

export default App;
