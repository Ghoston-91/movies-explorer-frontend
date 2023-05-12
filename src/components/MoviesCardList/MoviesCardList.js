import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(props) {

    return (
        <section className='movies-list'>
            <MoviesCard title={'33 слова о дизайне'} length={'1ч 47м'} img={'https://i.ibb.co/KmHKpZG/pic-COLOR-pic.jpg'} isSaved={true} isProfile={props.isProfile}/>
            <MoviesCard title={'33 слова о дизайне'} length={'1ч 47м'} img={'https://i.ibb.co/KmHKpZG/pic-COLOR-pic.jpg'} isSaved={true} isProfile={props.isProfile}/>
            <MoviesCard title={'33 слова о дизайне'} length={'1ч 47м'} img={'https://i.ibb.co/KmHKpZG/pic-COLOR-pic.jpg'} isSaved={true} isProfile={props.isProfile}/>
        </section>
    );
}

export default MoviesCardList;