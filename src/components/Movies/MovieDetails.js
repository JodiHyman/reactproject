import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export default function MovieDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://3.17.216.66:4000/latest/5ab12612f36d2879268f284a")
      .then(result => setData(result.data));
  }, []);

//   return (
//    <section className="text-gray-600 body-font">
//   <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
//         {data.map(item => (
// 			<img  key={item._id} className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"></img>
//               <div className="text-center lg:w-2/3 w-full">
//       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
//       <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
//       <div className="flex justify-center">
//         <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//         <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
//       </div>
//     </div>
            
//         ))}
//       </ul>
//     </div>
//   );
// }


 return(
        <>
		{data.map(item => (
  <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Latest Movie</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{item.name}</h1>
        <div className="flex mb-4">
          <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
          {/* <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a> */}
        </div>
        <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Release Date:</span>
          <span className="ml-auto text-gray-900">Blue</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Languarge:</span>
          <span className="ml-auto text-gray-900">{item.language}</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Rating:</span>
          <span className="ml-auto text-gray-900">{item.rate}</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Quantity</span>
          <span className="ml-auto text-gray-900">4</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">$14.50</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-96 w-96 lg:h-3/6 h-3/6 object-cover object-center rounded" src="https://image.ibb.co/f0hhZc/bp.jpg"></img>
    </div>
  </div>
</section>))}
        </>
    )
}

// 	return (
// 		<>

// 		<h3>{name}</h3>
// 		<p>Ratings: {rate}</p>
// 		<p>Category: {type}</p>
// 		<h3>Language: {language}</h3>
// 		<div>
//   <img src={imageUrl} alt='movie' key={_id} style={{ marginLeft: '.5rem' }}></img></div>
// 		</>
// 	);
// }

