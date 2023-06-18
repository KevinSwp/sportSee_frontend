import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from '../../data/data';
import { useNavigate } from 'react-router-dom';
import './header.scss';

function Header () {
    const { userId } = useParams();
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = USER_MAIN_DATA.find((user) => user.id === parseInt(userId));
        if (user) {
        setUserName(user.userInfos.firstName);
        } else {
        navigate('/404');
        }
    }, [userId, navigate]);

    return (
        <div>
        <h1 className='h1'>Bonjour <span className='userName'>{userName}</span></h1>
        <p className='text'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default Header;

