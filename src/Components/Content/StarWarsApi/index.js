import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './StarWarsApi.module.css';

function StarWarsApi(){
    const[ films, setFilms] = useState(null);
   
    useEffect (() => {
        let isMounted = true;
       
        const getNewData = async() => {
            const {data} = await axios.get('https://swapi.dev/api/films/')
            console.log(data);
            if(isMounted) {
                setFilms(data.results)
            }
        }
        const timer = setTimeout(() => {
            getNewData();
          }, 3000);
            
            return () => {
                clearTimeout(timer);
                isMounted = false;
            };
    }, []);

    

    if(!films) return (   <h1>
        <span className={style.dot}>.</span><span className={style.dot}>.</span><span className={style.dot}>.</span>
    </h1>)
        
        

return (
    <div>
        
    <div className={style.starWarsContainer}>
    
    <ul>
      {films.map((film) => (
        <li key={film.episode_id}>
          <h2>{film.title}</h2>
          <p>{film.opening_crawl}</p>
        </li>
      ))}
    </ul>
  </div>
  </div>
)
}
    export default StarWarsApi;