import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function SignInfo(props) {

    return (
        <div className='sign-info'>
            <p className='sign-info__text'>{props.text}</p>
            <button className='sign-info__btn' type='button'><Link style={{textDecoration: 'none', color: '#2BE080'}} to={props.onSignChange}>{props.actBtn}</Link></button>
        </div>

    );
}

export default SignInfo;