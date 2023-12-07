import { get, post } from '../lib/request.js';

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => post(`${baseUrl}/login`, {
    email,
    password
});

export const register = (username, email, password) => post(`${baseUrl}/register`, {
    username,
    email,
    password
});

export const logout = () => get(`${baseUrl}/logout`);