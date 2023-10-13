import React from "react";
import './css/hello.css';
import { PiHandWavingFill } from 'react-icons/pi'

const Hello = () => {
    let nome = 'Lucas'

    return (
        <>
            <div className="Container">
                <span><PiHandWavingFill /></span>
                <h2>Olá, {nome}!</h2>
            </div>
        </>
    )
}

export default Hello;