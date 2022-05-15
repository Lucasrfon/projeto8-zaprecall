import React from 'react';

const deck = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
]

function comparador() { 
	return Math.random() - 0.5; 
}

deck.sort(comparador)

function computarResposta ({setAnswered, answered}) {
    setAnswered (answered += 1)
}

function Respostas ({ position }) {

    const [vira, setVira] = React.useState('desvirada');

    if(vira === 'desvirada') {
        return (
            <div className="perguntar">
                {deck[position].question}
                <img src="/Imagens/setinha.png" alt="Ver" onClick={() => setVira('virada')} />
            </div>
        )
    }
    return (
        <div className="perguntar">
            {deck[position].answer}
            <div>
                <div className="selecionar" onClick={computarResposta}>Não lembrei</div>
                <div className="selecionar" onClick={computarResposta}>Quase não lembrei</div>
                <div className="selecionar" onClick={computarResposta}>Zap!</div>
            </div>
        </div>
    )
}


export default function Statement({ card, position, setAnswered, answered }) {

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
        <Respostas position={position} setAnswered={setAnswered} answered={answered} />
    )

}