import React from "react";
import './css/hello.css';
import Content from './Movies/Content'

const Recommended = () => {
    return (
        <div className="Container section">
            <div className="title">
                <h4>Filmes em alta</h4>
                <button className="show-btn">Ver todos</button>
            </div>
            <div className="Card">
                <Content />
            </div>
        </div>
    )
}

export default Recommended;