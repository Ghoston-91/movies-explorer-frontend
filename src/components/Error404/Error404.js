import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Error404() {

    return (
        <section className="errorNotFound">
            <h1 className="errorNotFound__number">404</h1>
            <p className="errorNotFound__error-desc">Страница не найдена</p>
            <button className="errorNotFound__back-btn" type='button'><Link style={{textDecoration: 'none', color: '#2BE080'}} to={'/'}>Назад</Link></button>
        </section>
    );
}

export default Error404;