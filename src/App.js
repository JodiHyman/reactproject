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


import Cover from "./components/Poster"
import Order from './components/Order/Order';
import CartContainer from './components/CartContainer';


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
{/* <Route path="/:name" element={<Cover />} /> */}

        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} /> */}
<Route path="/movie_details/:_id" element={<MovieCard />} />
        <Route path="/MovieCard" element={<MovieCard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/event_list" element={<Event />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
       
 <Footer />
    </BrowserRouter>

  
      
     
  );
}

export default App;
