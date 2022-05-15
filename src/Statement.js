import React from 'react';
import Resposta from './Resposta';


export default function Statement({ card, position }) {

    const [status, setStatus] = React.useState("flashCard");


    if (status === "flashCard") {
        return (
            <div className={status} onClick={() => setStatus("statement")}>
                <span>Pergunta {card}</span>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        )
    }
    
    return (
        <Resposta position={position} />
    )

}