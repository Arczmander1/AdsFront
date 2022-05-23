import React from "react";
import { Btn } from "../common/Btn";
import './Header.css';

export const Header = () => (
    <header>
        <h1>
            <strong>Wielkie</strong> Wybieranie
        </h1>
        <Btn text="Dodaj ogłoszenie"/>
        <div className="search">
            <input className="search_input" type="text"/>
            <Btn text="Szukaj"/>

        </div>
    </header>
);