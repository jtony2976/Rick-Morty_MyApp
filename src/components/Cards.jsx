//importamos el componente Card para poder hacer todas las Cards 
import Card from './Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;
   //console.log(characters)

   /*
      se crea una variable 'characters' que es una copia del objeto props y se usa la funcion
      maps para recorrer cada elemento del array que es un objeto.
      En la funcion map decimos que por cada elemento 'elem' que es un objeto vamos a 
      sacar cada propiedad con el nombre que se uso en el archivo data.js (que es nuestra DB).
      Agregamos una propiedad mas llamada 'key' que nos pide React que sera un key para cada
      elemento leido.
      Cada elemento se usara en el componente Botones para mostrar cada tarjeta
   */
   return (
      <div className={styles.container}>
         {characters.map((elem) => 
            <Card
               key={elem.id}
               id={elem.id}
               name={elem.name}
               species={elem.species}
               gender={elem.gender}
               image={elem.image}
               onClose={() => onClose(elem.id)}
            />
         )}
      </div>
   );
}