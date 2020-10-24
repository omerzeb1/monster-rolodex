import React from 'react';
import './Card.style.css';

export const Card = (props) => {
    return <div className="card-container">
        <img alt="" src={`https://robohash.org/${props.monster.id}?set=set2?size=100x100`}/>
        <h1>{props.monster.name}</h1>
        <h2>{props.monster.email}</h2>
    </div>
};