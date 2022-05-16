import React from "react";

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

function Respostas ({ position, setAnswered, answered, setListaIcones, listaIcones, setStatus, setIcone, setErro, setQtdZap, qtdZap}) {

    const [vira, setVira] = React.useState('desvirada');

    function clique() {
        setAnswered(answered += 1);
    }
    
    function errou() {
        clique();
        setStatus("flashCard errou");
        setIcone("close-circle");
        setListaIcones([...listaIcones, "close-circle"])
        setErro(true);
    }
    function lembrou() {
        clique();
        setStatus("flashCard lembrou");
        setIcone("help-circle");
        setListaIcones([...listaIcones, "help-circle"])
    }
    function zap() {
        clique();
        setStatus("flashCard zap");
        setIcone("checkmark-circle");
        setListaIcones([...listaIcones, "checkmark-circle"]);
        setQtdZap(qtdZap += 1)
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


export default function Statement({position, setAnswered, answered, setListaIcones, listaIcones, setErro, setQtdZap, qtdZap }) {
    const [status, setStatus] = React.useState("flashCard");
    const [icone, setIcone] = React.useState("")


    if (status === "flashCard") {
        return (
            <div className={status} onClick={() => setStatus("statement")}>
                <span>Pergunta {position + 1}</span>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        )
    }
    if (status === "statement") {
        return (
            <Respostas position={position} setAnswered={setAnswered} answered={answered} setListaIcones={setListaIcones} listaIcones={listaIcones} setStatus={setStatus} setIcone={setIcone} icone={icone} setErro={setErro} setQtdZap={setQtdZap} qtdZap={qtdZap}  />
        )
    }
    return (
        <div className={status}>
            <span>Pergunta {position + 1}</span>
            <ion-icon name={icone}></ion-icon>
        </div>
    )
}