import { get, post } from '../lib/request';

const baseUrl = 'http://localhost:3030/data/reviews';

export const getAll = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (gameId, title, review) => await post(baseUrl, {
    gameId,
    title,
    review
});
