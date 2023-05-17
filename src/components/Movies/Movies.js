import React, { useState, useEffect } from 'react';
import AccountHeader from '../AccountHeader/AccountHeader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer'
import FindMoreBtn from '../FindMoreBtn/FindMoreBtn';
import Preloader from '../Preloader/Preloader';
import Greetings from '../Greetings/Greetings'

function Movies(props) {

    // тест лоудера
    const isLoading = false;
    const isMoreLoading = false;
    const isEmptyList = false;

    return (
        <div className='movies'>
            <AccountHeader routeLinks={props.routeLinks}/>
            <main>
                <SearchForm />
                    {!isLoading ?
                        <>
                            {!isEmptyList ?
                                <>
                                    <MoviesCardList isProfile={false}/>
                                    {!isMoreLoading ? 
                                    <FindMoreBtn isProfile={false}/> 
                                    : <Preloader />}
                                </>
                            : <Greetings text={'По данному запросу фильмы не найдены...'}/>}
                        </>
                    : <Preloader />}
            </main>  
            <Footer />
        </div>
    );
}

export default Movies;