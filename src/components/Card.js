import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import '../styles/Card.css'
function Card(props) {

    const[isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        setIsFlipped(!isFlipped);
    }

    

    return (
        <div className="card__container">

            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div onMouseEnter={handleClick} className="card__front">
                    <img className="character__img" src={props.image} alt="" />
                </div>

                <div onMouseLeave={handleClick}  className="card__back">
                    <p className="character__name">{props.name}</p>
                    <p>Profession: {props.profession} </p>
                    <p>Race: {props.race}</p>
                    <p>Nationality: {props.nationality}</p>
                    <p>Gender: {props.gender}</p>
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default Card
