import React from 'react'


export default function HomePage ({setScreen, setMeta}) {
    const [botao, setBotao] = React.useState('off');

    function definirMeta (event) {
        let aux = event.target.value;
        setMeta(aux)
        if(aux >= 1 && aux <= 8) {
            setBotao('on')
        }
    }
    return (

        <div className="homeContainer">
            <img src="./Imagens/logo.png" alt="Logo" />
            <h1>ZapRecall</h1>
            {botao === 'off' 
            ? 
            <input type='number' min="1" max="8" step="1" placeholder='Digite sua meta de zaps...' onChange={definirMeta}></input> 
            : 
            <input disabled></input>}
            {botao === 'off' ? <button className='off'>Iniciar Recall!</button> : <button onClick={() => setScreen('MainPage')}>Iniciar Recall!</button>}
        </div>  
    )
}