import styles from './Card.module.css'
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from '../redux/actions/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react'



export function Card(props) {
   // props --> tiene toda la informacion que se paso al componente Card desde el componente Cards
   console.log("Esto es pprops:", props)
   //estado local
   const [isFav, setIsFav] = useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         props.deleteFavorite(props.id)
      } else{
         setIsFav(true);
         props.addFavorite(props)
      }
   }

   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   // eslint-disable-next-line no-undef
   }, [props.myFavorites]);


   //console.log(props);
   //como props es un objeto, cada propiedad es accesada con los nombres
   //de los argumentos que se le pasaron al componente Card en Apps.js
   return (
      <div className={styles.containerGeneral}>
         <div className={styles.card}>
            <div className={styles.container1}>
               {
                  isFav ? (
                     <button onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite}>🤍</button>
                  )
               }
               <button className={styles.cardButton} onClick={props.onClose}>X</button>
            </div>

            <div className={styles.container2}>
               <img src={props.image} alt="Sin foto" className={styles.cardImage}/>
               <Link to={`/detail/${props.id}`}>
                  <h2>{props.name}</h2>
               </Link>
            </div>

            <div className={styles.container3}>
               <div className={styles.divs3}><h2>{props.gender}</h2></div>
               <div className={styles.divs3}><h2>{props.species}</h2></div>
            </div>
         </div>
      </div>
   );
}


export function mapDispatchToProps(dispatch){
   return{
      addFavorite: (personaje) =>{
         dispatch(addFavorite(personaje))
      },

      deleteFavorite:(id) =>{
         dispatch(deleteFavorite(id))
      }
   }
}

export function mapStateToProps(state){
   return ({ 
      myFavorites: state.myFavorites,
   })
}

//Conectando funciones map con el componente Card
export default connect(mapStateToProps, mapDispatchToProps)(Card);


