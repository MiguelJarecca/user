import { NavLink } from "react-router-dom";

export const UserRow = ({ handleDeleteUser, handleSelectUser, id, userName, email }) => {

    const onDeleteUser = (id) => {
        handleDeleteUser(id);
    }

    const onSelectetUser = (user) => {
        handleSelectUser(user);
    }

    return (
        
             <tr>
                <td>{id}</td>
                <td>{userName}</td>
                <td>{email}</td>
                <td>
                    <button
                        type="button"
                        onClick={() => onSelectetUser({id, userName, email})}
                        >
                        Actualizar    
                    </button>
                </td>
                <td>
                    <NavLink to={'/users/update/' + id}>
                        actualizar ruta
                    </NavLink>
                </td>
                <td>
                    <button 
                        type="button"
                        onClick={() => onDeleteUser(id)}
                        >
                        Eliminar
                    </button>

                    
                </td>
            </tr>
    );
};