import React from "react";
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const { onSearch } = props;
   const [character , setCharacter ] = React.useState("");
   
   function handleChange(evento){ 
      setCharacter(evento.target.value);
   }

   function handleSubmit(){
      onSearch(character)
      setCharacter("")
   }

   return (
      <div className={styles.container}>
         <div>
            <input type='search' value={character} onChange={handleChange} />
         </div>
         <div>
            <button className={styles.button} onClick={handleSubmit}>Agregar</button>
         </div>
      </div>
   );
}
