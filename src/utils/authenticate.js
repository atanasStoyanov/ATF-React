import axios from 'axios';
import axiosDb from '../axios-db';

export const authenticate = async (url, authData, onSuccess, onFailure) => {
    try {
        const response = await axios.post(url, authData);

        const authToken = response.data.idToken;
        const userId = response.data.localId;

        console.log(authToken);
        console.log(userId);
        document.cookie = `x-auth-token=${authToken}`;
        document.cookie = ` user=${userId}`;

        if (authToken && userId) {
            onSuccess({
                userId: userId
            });
        } else {
            onFailure();
        }
    } catch (e) {
        onFailure(e);
    }
}

export const createUserInDb = (userData) => {
    axiosDb.post('/players.json', userData)
        .then(response => console.log(response))
        .catch(err => console.log(err));
}
