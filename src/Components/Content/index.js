import style from './Content.module.css';
import StarWarsApi from "./StarWarsApi";
function Content() {
    

   

    
    return(
        <div className={style.content}>
            <h1>StarWars Films</h1>
            <StarWarsApi/>
        </div>
      
    );
}
export default Content;