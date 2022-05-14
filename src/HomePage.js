import React from 'react'


export default function HomePage ({setScreen}) {
    return (

        <div className="homeContainer">
            <img src="./Imagens/logo.png" alt="Logo" />
            <h1>ZapRecall</h1>
            <button onClick={() => setScreen('MainPage')}>Iniciar Recall!</button>
        </div>
        
    )
}