import axios from 'axios';
import axiosDb from '../axios-db';

export const authenticate = async (url, authData, onSuccess, onFailure) => {
    try {
        const response = await axios.post(url, authData);

        const authToken = response.data.idToken;
        const userId = response.data.localId;

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

export const getUserData = async (userId) => {
    const queryParams = `?orderBy="userId"&equalTo="${userId}"`;
    const response = await axiosDb.get('/players.json' + queryParams);

    const data = [];
    for (const user in response.data) {
        data.push({
            ...response.data[user],
            userIdentification: user
        });
    }

    const userInfo = data[0];

    return userInfo;
}

export const createUserInDb = (userData) => {
    axiosDb.post('/players.json', userData)
        .then(response => console.log('User has been created successfully'))
        .catch(err => console.log(err));
}


export const updateUserInDb = async (userData, userId) => {

    try {
        await axiosDb.patch(`/players/${userId}.json`, userData);
    } catch (e) {
        console.log(e);
    }

}

export const deleteUserFromDb = async (userId) => {
    try {
        await axios.delete(`https://react-atf-default-rtdb.europe-west1.firebasedatabase.app/players/${userId}.json`);
    } catch (e) {
        console.log(e);
    }
}

export const deleteAccount = async (url, idToken, onSuccess, onFailure) => {
    try {
        const deleteStatus = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                idToken
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (deleteStatus.status === 200) {
            onSuccess();
        } else {
            onFailure()
        }

    } catch (e) {
        onFailure(e)
    }
}