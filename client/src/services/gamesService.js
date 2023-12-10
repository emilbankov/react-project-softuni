import { get, post, put, del } from '../lib/request.js';

const baseUrl = 'http://localhost:3030/data/games';

export const getAll = async () => await get(baseUrl);
export const getOne = async (gameId) => await get(`${baseUrl}/${gameId}`);

export const getLatest = async () => {
    const result = await get(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=4`);

    return result;
}

export const create = (title, imageUrl, genre, developer, players, price, description) => post(baseUrl, {
    title,
    imageUrl,
    genre,
    developer,
    players,
    price,
    description
});

export const edit = async (gameId, gameData) => {
    const result = await put(`${baseUrl}/${gameId}`, gameData);

    return result;
};

export const deleteGame = async (gameId) => await del(`${baseUrl}/${gameId}`);