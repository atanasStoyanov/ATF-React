import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import styles from './Profile.module.css';

import axios from '../../axios-db';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import PageLayout from '../PageLayout/PageLayout';
import Spinner from '../../components/Spinner/Spinner';
import ProfileInfo from '../../components/Profile-Info/Profile-Info';
import LinkButton from '../../components/Button/LinkButton';

import UserContext from '../../Context';
import SubmitButton from '../../components/Button/SubmitButton';

const Profile = props => {

    const [user, setUser] = useState(null);
    const [isCurrentUser, setIsCurrentUser] = useState(false);

    const context = useContext(UserContext)
    const history = useHistory();
    const params = useParams();

    const userId = params.userId;
    const currentUserId = context.user.userId;


    const getUserData = useCallback(async () => {
        const queryParams = `?orderBy="userId"&equalTo="${userId}"`;
        const response = await axios.get('/players.json' + queryParams);

        const data = [];
        for (const user in response.data) {
            data.push(response.data[user]);
        }

        const userInfo = data[0];
        setUser(userInfo);

        const isCurrent = userInfo.userId === currentUserId;

        setIsCurrentUser(isCurrent);

    }, [userId, currentUserId]);

    const deleteAccount = () => {
        console.log('Account Deleted');
        history.push('/')
    }


    useEffect(() => {
        getUserData();
    }, [getUserData]);

    let controls = null;

    if (isCurrentUser) {
        controls = (
            <div className={styles.Controls}>
                <LinkButton to='/edit-profile' title='Edit Profile' />
                <SubmitButton onClick={deleteAccount} title='Delete Account' />
            </div>
        );
    } else {
        controls = (
            <LinkButton to='/challenge-player' title='Challange player' />
        );
    }

    const profile = (
        <Aux>
            <ProfileInfo userData={user} />
            {controls}
        </Aux>
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