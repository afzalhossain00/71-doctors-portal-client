import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, bgClass, icon } = card;

    return (
        <div className={`card card-side shadow-xl text-white p-6 mt-14 ${bgClass}`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;