import axios from '../axios-db';

export const getUserData = async (userId) => {
    const queryParams = `?orderBy="userId"&equalTo="${userId}"`;
    const response = await axios.get('/players.json' + queryParams);

    const data = [];
    for (const user in response.data) {
        data.push(response.data[user]);
    }

    const userInfo = data[0];

    return userInfo;
}