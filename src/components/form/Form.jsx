import React from "react";
import { validate } from "./validation";

export default function Form(props) {

    // creacion del estado para los textboxs del Form
    const [userData, setUserData] = React.useState({ 
        username: '',
        password: ''
    });

    //creacion de estado para capturar los mensajes de error
    const [errors, setErrors] = React.useState({
        username: '',
        password: ''
      });
    
    //esta funcion sera para capturar los cambios en los texboxes del Form
    //para cambiar los valores en el estado 'userData'
    const handleInputChange = (e) => {
        setUserData({ ...userData,
                    [e.target.name]: e.target.value
        });

        setErrors(
            validate({
               ...userData,
               [e.target.name]: e.target.value,
            })
        );
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        props.login(userData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    name="username"
                    placeholder="Escriba el username..."
                    type="text"
                    value={userData.username}
                    onChange={handleInputChange}
                />
                <p>{errors.username}</p>
                <br></br>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    name="password"
                    placeholder="Escribe tu password..."
                    type="password"
                    value={userData.password}
                    onChange={handleInputChange}
                />
                <p>{errors.password}</p>
                <br></br>
                <br></br>
                <input type="submit" />
            </form>
        </div>
    );
}

