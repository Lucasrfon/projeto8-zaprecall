import React from 'react';
import IconeCard from './IconeCard';

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

deck.sort(comparador);

function Respostas ({ position, setAnswered, answered, setStatus, setIcones, icones }) {

    const [vira, setVira] = React.useState('desvirada');

    function clique() {
        setAnswered(answered += 1);
    }

    function errou() {
        clique();
        setStatus("flashCard errou")
        setIcones("close-circle")
        console.log(icones)
    }
    function lembrou() {
        clique();
        setStatus("flashCard lembrou")
        setIcones("help-circle")
        console.log(icones)
    }
    function zap() {
        clique();
        setStatus("flashCard zap")
        setIcones("checkmark-circle")
        console.log(icones)
    }

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
                <div className="selecionar red" onClick={errou}>Não lembrei</div>
                <div className="selecionar orange" onClick={lembrou}>Quase não lembrei</div>
                <div className="selecionar green" onClick={zap}>Zap!</div>
            </div>
        </div>
    )
}


export default function Statement({ card, position, setAnswered, answered }) {

    const [status, setStatus] = React.useState("flashCard");
    const [icones, setIcones] = React.useState("play-outline")


    if (status === "flashCard") {
        return (
            <div className={status} onClick={() => setStatus("statement")}>
                <span>Pergunta {card}</span>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        )
    }
    if (status === "statement") {
        return (
            <Respostas position={position} setAnswered={setAnswered} answered={answered} setStatus={setStatus} setIcones={setIcones} icones={icones} />
        )
    }
    return (
        <div className={status}>
            <span>Pergunta {card}</span>
            <IconeCard icones={icones} />
        </div>
    )
}