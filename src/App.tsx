import React from 'react';

import './App.css';

export const App = () => {
    return (
        <>
            <header>
                <h1>
                    <strong>Wielkie</strong> Wybieranie
                </h1>
                <button className="add_ad">Dodaj ogłoszenie</button>
                <div className="search">
                    <input className="search_input" type="text"/>
                    <button className="search_btn">Szukaj</button>
                </div>
            </header>
            <div className="map">
                <button className="zoom_in">+</button>
                <button className="zoom_out">-</button>
                ...
            </div>
        </>
    );
};
