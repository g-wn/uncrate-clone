import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';

function Navigation() {

    return (
        <>
            <header className='splash-page-header'>
                <div className='splash-page-top-bar-container'>
                    <div className='header-top-bar'>
                        <div>
                            <span>FOLLOW @ UNCRATE</span>
                        </div>
                        <div className='header-top-bar-center'>
                            <a>UNCRATE.COM</a>
                            <a>UNCRATE.SUPPLY</a>
                            <a>UNCRATE.TV</a>
                        </div>
                        <div>
                            <span>LANGUAGE: ENGLISH</span>
                        </div>
                    </div>
                </div>
                <div className='header-bottom-bar'>
                    <div></div>
                    <div className='header-logo'>
                        <img src='https://uncrate.com/img/uncrate-lights.png'></img>
                    </div>
                    <div className='header-icons'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <i class="fa-sharp fa-solid fa-box"></i>
                    </div>
                </div>
            </header>
            <nav className='nav'>
                <div className='nav-bar-categories'>
                    <a>GEAR</a>
                    <a>STYLE</a>
                    <a>CARS</a>
                    <a>TECH</a>
                    <a>SHELTER</a>
                    <a>VICES</a>
                    <a>BODY</a>
                    <a>ETC</a>
                </div>
                <div className='nav-bar-categories-border' />
                <div className='nav-bar-subcategories-border' />
                <div className='nav-bar-subcategories'>
                    <a>SHOP</a>
                    <a>MAGAZINE</a>
                    <a>IPHONE APP</a>
                    <a>ANDROID APP</a>
                    <a>MOST WANTED</a>
                    <a>BLACK LIST</a>
                    <a>STASH</a>
                </div>
                <div className='nav-bar-subcategories-border' />
            </nav>
        </>
    )
}

export default Navigation;
