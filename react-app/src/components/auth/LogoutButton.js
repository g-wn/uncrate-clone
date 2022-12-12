import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = ({ setShowLoginModal }) => {
    const dispatch = useDispatch()
    setShowLoginModal(false)
    const onLogout = async (e) => {
        await dispatch(logout());
    };

    return <button className='logout-button' onClick={onLogout}>LOG OUT</button>;
};

export default LogoutButton;
