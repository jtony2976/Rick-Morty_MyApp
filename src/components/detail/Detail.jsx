import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail() {
    const { detailId } = useParams();
    const navigate = useNavigate();
    //console.log(detailId);

    const [character, setCharacter] = useState();

    const handleClick = () => {
        navigate('/home')
    }
    /*
        fetch() es una solicitud get que ejecuta un metodo de HTTP que
        hace una solicitud para que le traigan la informacion de la url
        en este caso con el id del personaje.
        Y esta solicitud le devuelve una promesa y se actuliza 'detailId'

    */
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
    }, [detailId]);

    console.log(character);

    /*el simbolo de ? (se llama: ternario o renderizado condicional) se
      usa porque 'character' y 'origin' son objetos.
      Si no se usa esta forma no se renderiza nada en la pagina
      Esto es un tema de las "Promesas"
      Significa que si existe un 'character' entonces (?) renderiza lo
      esta dentro de los divs.
      Y en origin? -> significa que si existe un nombre, muestralo
      Este ? es para darle tiempo a la API de traer la informacion y
      guardarla en character.
    */
    return <div>
        <button onClick={handleClick}>Go Home</button>
        {character ? (<div>
                        <div>
                            <h1>Name: {character.name}</h1>
                            <h5>Status: {character.status}</h5>
                            <h5>Species: {character.species}</h5>
                            <h5>Gender: {character.gender}</h5>
                            <h5>Origin: {character.origin?.name}</h5>
                        </div>
                        <div>
                            <div><img src={character.image} alt={character.name}></img></div>
                        </div>
                    </div>) : ("")}
        </div>
}