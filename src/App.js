import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header"
import Footer from './components/Footer';
import Home from "./components/Home"
import Hero from "./components/Hero3"
import MovieCard from "./components/Movies/MovieCard"
import MainPage from './components/MainPage';
import Main1 from "./components/Main1";


import Cover from "./components/Poster"
const App=() => {
  return (
    
     <BrowserRouter>
     <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/main" element={<Main1 />} />
        <Route path="/latest/:_id" element={<Hero />} />
{/* <Route path="/:name" element={<Cover />} /> */}

        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} /> */}
<Route path="/movie_details/:_id" element={<MovieCard />} />
        <Route path="/MovieCard" element={<MovieCard />} />

      </Routes>
       
 <Footer />
    </BrowserRouter>

  
      
     
  );
}

export default App;
