import React from 'react'

export default function HomePage ({setScreen, setMeta}) {
    const [botao, setBotao] = React.useState('off');
    const decks = ["Deck1", "Deck2", "Deck3", "Deck4"]

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
            <input list="decks" placeholder="Escolha seu deck"/>
                <datalist id="decks">
                    <option value={decks[0]} />
                    <option value={decks[1]} />
                    <option value={decks[2]} />
                    <option value={decks[3]} />
                </datalist>
            {botao === 'off' 
            ? 
            <input type='number' min="1" max="8" step="1" placeholder='Digite sua meta de zaps...' onChange={definirMeta}></input> 
            : 
            <input disabled></input>}
            {botao === 'off' ? <button className='off'>Iniciar Recall!</button> : <button onClick={() => setScreen('MainPage')}>Iniciar Recall!</button>}
        </div>  
    )
}