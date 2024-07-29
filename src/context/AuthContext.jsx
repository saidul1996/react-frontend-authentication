import { Children, createContext, useContext, useState } from "react";
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState(null);
    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const getUser = async () => {
        const { data } = await axios.get('/api/user');
        setUser(data);
    }
}