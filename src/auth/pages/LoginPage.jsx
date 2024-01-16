import { useState } from "react";
import Swal from "sweetalert2";

const initialLoginForm = {
    username: '',
    password: '',
}

export const LoginPage = ({handleLogin}) => {

    const [loginForm, setLoginForm] = useState(initialLoginForm);

    const { username, password } = loginForm;

    const onInputChange = ({ target }) => {
        const {name,value} = target;
        setLoginForm({
            ...loginForm,
            [ name ] : value
        })
    } 

    const onSubmit = (event) => {
        event.preventDefault();

        if (!username || !password) {
            Swal.fire('Error de validacion', 'username y password requeridos', 'error');
        }

        //aca implementamos el login
        handleLogin({username, password});

    }

    return(
        <div>

            <div>
                <h3>Login page</h3>

                <form onSubmit={onSubmit}>
                    <input 
                        type="text"
                        placeholder="username"
                        name="username"
                        value={username}
                        onChange={onInputChange}
                        />

                    <input 
                        type="text"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                        />  

                    <button
                        type="submit"
                        >
                        Login
                    </button>      
                </form>
            </div>

        </div>
    )
};