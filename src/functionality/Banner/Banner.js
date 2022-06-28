import React, { useEffect, useState } from 'react';
import './Banner.css';
import Axios from '../axios/axios';
import { API_KEY } from '../constants/constants';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    let min = 0;
    let max = 20;
    function randomNumber() {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    Axios.get(`trending/all/day?api_key=${API_KEY}`).then((response) => {
      setMovie(response.data.results[randomNumber()]);
    });
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;

// function Banner() {
//   const [movie, setMovie] = useState();
//   useEffect(() => {
//     let min = 0;
//     let max = 20;
//     function randomNumber() {
//       return Math.floor(Math.random() * (max - min)) + min;
//     }

//     Axios.get(`trending/all/day?api_key=${API_KEY}`).then((response) => {
//       setMovie(response.data.results[randomNumber()]);
//     });
//   }, []);

//   return (
//     <div
//       className="banner"
//       style={{
//         backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})`,
//       }}
//     >
//       <div className="content">
//         <h1 className="title">{movie ? movie.title || movie.name : ''} </h1>
//         <div className="banner_buttons">
//           <button className="button">Play</button>
//           <button className="button">My list</button>
//         </div>
//         <h1 className="description">{movie ? movie.overview : ''} </h1>{' '}
//       </div>
//       <div className="fade_bottom"></div>
//     </div>
//   );
// }

// export default Banner;
