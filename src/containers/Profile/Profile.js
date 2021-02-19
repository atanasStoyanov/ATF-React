import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import styles from './Profile.module.css';

import { getUserData, deleteAccount, deleteUserFromDb } from '../../utils/user';
import getCookie from '../../utils/getCookie';

import DeleteModal from '../../components/Modal/DeleteModal/DeleteModal';
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
    const [deleteProfile, setDeleteProfile] = useState(false);

    const context = useContext(UserContext)
    const history = useHistory();
    const params = useParams();

    const userId = params.userId;
    const currentUserId = context.user.userId;


    const getData = useCallback(async () => {

        const userInfo = await getUserData(userId);
        setUser(userInfo);

        const isCurrent = userInfo.userId === currentUserId;

        setIsCurrentUser(isCurrent);

    }, [userId, currentUserId]);

    const openDeleteModal = async () => {
        setDeleteProfile(true);
    }

    const deleteCanceled = () => {
        setDeleteProfile(false);
    }

    const handleDeleteAccount = () => {
        const idToken = getCookie('x-auth-token');

        deleteAccount('https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyA6Peyo5GN3spsTPYMadeQlfkp91rj6YMA',
            idToken,
            () => {
                context.logOut();
                deleteUserFromDb(user.userIdentification);
                history.push('/');
            },
            (e) => { console.log(e) }
        );
    }

    useEffect(() => {
        getData();
    }, [getData]);

    let controls = null;

    if (isCurrentUser) {

        controls = (
            <div className={styles.Controls}>
                <LinkButton to={`/profile/edit/${user && userId}`} title='Edit Profile' />
                <SubmitButton onClick={openDeleteModal} title='Delete Account' />
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
            <DeleteModal
                show={deleteProfile}
                close={deleteCanceled}
                title='Delete Account'
                message='Are you sure you want to delete your account?'
                deleteCanceled={deleteCanceled}
                handleDelete={handleDeleteAccount}
            />
            <div>
                {!user ? <Spinner /> : profile}
            </div>
        </PageLayout>
    )
}

export default Profile;