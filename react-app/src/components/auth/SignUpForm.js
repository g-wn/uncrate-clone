import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css';

const SignUpForm = () => {
    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const data = await dispatch(signUp(username, email, password));
            if (data) {
                setErrors(data)
            }
        }
    };

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const updateLastName = (e) => {
        setLastName(e.target.value);
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    if (user) {
        return <Redirect to='/' />;
    }

    return (
        <form className='signup-form' onSubmit={onSignUp}>
            <h1 className='signup-form-title'>SIGN UP</h1>
            <div className='signup-form-errors'>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div className='signup-form-field-top'>
                <label className='signup-form-label'>FIRST NAME</label>
                <input
                    className='signup-form-input'
                    type='text'
                    name='firstName'
                    onChange={updateFirstName}
                    value={firstName}
                ></input>
            </div>
            <div className='signup-form-field-top'>
                <label className='signup-form-label'>LAST NAME</label>
                <input
                    className='signup-form-input'
                    type='text'
                    name='lastName'
                    onChange={updateLastName}
                    value={lastName}
                ></input>
            </div>
            <div className='signup-form-field-top'>
                <label className='signup-form-label'>USERNAME</label>
                <input
                    className='signup-form-input'
                    type='text'
                    name='username'
                    onChange={updateUsername}
                    value={username}
                ></input>
            </div>
            <div className='signup-form-field-top'>
                <label className='signup-form-label'>EMAIL</label>
                <input
                    className='signup-form-input'
                    type='text'
                    name='email'
                    onChange={updateEmail}
                    value={email}
                ></input>
            </div>
            <div className='signup-form-field-top'>
                <label className='signup-form-label'>PASSWORD</label>
                <input
                    className='signup-form-input'
                    type='password'
                    name='password'
                    onChange={updatePassword}
                    value={password}
                ></input>
            </div>
            <div className='signup-form-field'>
                <label className='signup-form-label'>REPEAT PASSWORD</label>
                <input
                    className='signup-form-input'
                    type='password'
                    name='repeat_password'
                    onChange={updateRepeatPassword}
                    value={repeatPassword}
                    required={true}
                ></input>
            </div>
            <button type='submit' className='signup-submit'>Sign Up</button>
        </form>
    );
};

export default SignUpForm;
