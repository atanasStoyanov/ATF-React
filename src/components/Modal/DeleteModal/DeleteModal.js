import React from 'react';

import styles from './DeleteModal.module.css';

import Modal from '../Modal';
import { ImBin } from 'react-icons/im';


const DeleteModal = props => (
    <Modal show={props.show} modalClosed={props.close}>
        <ImBin className={styles.Icon} />
        <div className={styles.Text}>
            <h3>{props.title}</h3>
            <h5>{props.message}</h5>
        </div>
        <div className={styles.Controls}>
            <button className={styles.CancelBtn} onClick={props.deleteCanceled}>Cancel</button>
            <button className={styles.DeleteBtn} onClick={props.handleDelete}>Delete</button>
        </div>
    </Modal>
);

export default DeleteModal;