import React from 'react';

const Card = (props) => {
    return (
        <div className="col-md-12">
            <div className="card text-center">
                <div className="card-body">
                    <h4 className="card-title">{props.chat.user} said: </h4>
                    <h4 className="card-title">{props.chat.chirp}</h4>
                    <p className="card-body">{props.chat.date}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;