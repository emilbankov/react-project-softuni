import { post } from '../lib/request.js';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await post(`${baseUrl}/login`, {
        email,
        password
    });

    return result;
}