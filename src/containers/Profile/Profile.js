import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from '../../axios-db';

import PageLayout from '../PageLayout/PageLayout';
import Spinner from '../../components/Spinner/Spinner';
import ProfileInfo from '../../components/Profile-Info/Profile-Info';

const Profile = props => {

    const [user, setUser] = useState(null);

    const params = useParams();
    const userId = params.userId;

    const getUserData = useCallback(async () => {
        const queryParams = `?orderBy="userId"&equalTo="${userId}"`;
        const response = await axios.get('/players.json' + queryParams);

        const data = [];
        for (const user in response.data) {
            data.push(response.data[user]);
        }

        const userInfo = data[0];
        setUser(userInfo);

    }, [userId]);

    useEffect(() => {
        getUserData();
    }, [getUserData]);
    
    let profile = (
        <ProfileInfo/>
    );
    
    return (
        <PageLayout>
            <div>
                {!user ? <Spinner /> : profile}
            </div>
        </PageLayout>
    )
}

export default Profile;