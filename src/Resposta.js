import React, { useState } from "react";
const deck = [
    { question: "O que é JSX?1", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "O React é __2", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __3", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX4", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __5", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __6", answer: "gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __7", answer: "passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __8", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
]

function Resultado ({text}) {
    return (
        <div className="selecionar">{text}</div>
    )
}

function comparador() { 
	return Math.random() - 0.5; 
}

deck.sort(comparador)

export default function Respostas ({ position }) {

    const [vira, setVira] = useState('desvirada');

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
                <Resultado text="Não lembrei" />
                <Resultado text="Quase não lembrei"/>
                <Resultado text="Zap!"/>
            </div>
        </div>
    )
}