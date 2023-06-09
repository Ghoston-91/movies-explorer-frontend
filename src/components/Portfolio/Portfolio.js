import React, { useState, useEffect } from 'react';
import LinkIcon from "../../images/link-icon.svg"

function Portfolio() {

    return (
        <section className='portfolio'>            
            <h2 className='portfolio__title'>Портфорлио</h2>
            <ul className='portfolio__site-list'>
                <li className='portfolio__site-item'>
                    <a className='portfolio__site-link' href='https://github.com/Ghoston-91/how-to-learn' target="_blank" rel='noreferrer'>
                        <p className='portfolio__site-name'>Статичный сайт</p>
                        <img src={LinkIcon} className='portfolio__site-icon' alt="Значек перехода по ссылке"/>
                    </a>
                </li>
                <li className='portfolio__site-item'>
                    <a className='portfolio__site-link' href='https://github.com/Ghoston-91/russian-travel_ghoston' target="_blank" rel='noreferrer'>
                        <p className='portfolio__site-name'>Адаптивный сайт</p>
                        <img src={LinkIcon} className='portfolio__site-icon' alt="Значек перехода по ссылке"/>
                    </a>
                </li>
                <li className='portfolio__site-item'>
                    <a className='portfolio__site-link' href='https://github.com/Ghoston-91/react-mesto-api-full-gha' target="_blank" rel='noreferrer'>
                        <p className='portfolio__site-name'>Одностраничное приложение</p>
                        <img src={LinkIcon} className='portfolio__site-icon' alt="Значек перехода по ссылке"/>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;