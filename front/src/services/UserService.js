import axios from "axios"

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/users`;

const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-type": "application/json",
        }
    }
}

//COMUNICACION CON EL BACKEND

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.log(error);
    }

    return null;
    
}

export const save = async({username, email, password, admin}) => {
    try {
        return await axios.post(BASE_URL, {
            username,
            email,
            password,
            admin,
        }, config());
    } catch (error) {
        throw error;
    }
}

export const update = async({id, username, email, admin}) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            username,
            email,
            admin,
        }, config());
    } catch (error) {
        throw error;
    }
}

export const remove = async(id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`, config());
    } catch (error) {
        throw error;
    }
}