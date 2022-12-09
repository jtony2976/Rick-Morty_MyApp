import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import Detail from './components/detail/Detail'
import About from './components/about/About'
import Form from './components/form/Form'
import Favorites from './components/favorites/Favorites';
import styles from './css_files/styles.css'

//import characters from './data.js'

export default function App () {
  const [characters , setCharacters ] = React.useState([]);

  const navigate = useNavigate();

  //creando el estado local para el password inicializado en false
  const [access, setAccess] = React.useState(false);

  //inicializamos el username y password con los datos que nos dara acceso a la aplicacion
  const username = 'juan@mail.com';
  const password = 'juan123';
  
  //---------------------------------------------------------------------------------------------
  function login(userData) {
     if (userData.password === password && userData.username === username) {
        //cambiamos el estado de 'access'  a true porque se uso el pass correcto
        setAccess(true);
        //y se redirije al componente Home (nos manda a Home)
        navigate('/home');
     } else {
        alert('Usuario o password incorrectos')
     }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  const onClose = (id) => {
    // en el filter decimos --> por cada 'char' que revise que su char.id sea diferente del id que se esta recibiendo
    setCharacters(characters.filter(char => char.id !== id))
  }

  /*
    El hook 'useLocation' me sirve para saber en que path estoy lo guardamos en una variable
    porque el hook es un objeto y poder   usar la propiedad pathname.
    Cuando arrancamos la app el pathname sera "/"
    Por eso usamos --> location.pathname !== '/' para si el pathname es diferente "/" entonces
    se renderize (muestre) el componente Nav
  */
  const location = useLocation();
  //console.log(location);

  //El componente se monta si 'access' no esta en true, te quedas en raiz, que seria el form login
  React.useEffect(() => {
    !access && navigate('/');
  }, [access]);

  //---------------------------------------------------------------------------------------------
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {location.pathname !== '/' && <Nav onSearch = {onSearch} />}
      </div>
        <Routes>
          <Route path="/" element={<Form login={login} />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        </Routes>
        <Routes>
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />}/>
        </Routes>
        <Routes>
          <Route path="/detail/:detailId" element={<Detail />}/>
        </Routes>
    </div>
  )
}
