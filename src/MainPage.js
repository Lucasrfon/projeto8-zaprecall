import Footer from "./Footer";

function Statement () {
    
    return (
        <></>
    )
}

export default function MainPage () {
    const deck = [
        {Q1: "O que é JSX?", R1: "Uma extensão de linguagem do JavaScript"},
        {Q2: "O React é __", R2: "uma biblioteca JavaScript para construção de interfaces"},
        {Q3: "Componentes devem iniciar com __", R3: "letra maiúscula"},
        {Q4: "Podemos colocar __ dentro do JSX", R4: "expressões"},
        {Q5: "O ReactDOM nos ajuda __", R5: "interagindo com a DOM para colocar componentes React na mesma"},
        {Q6: "Usamos o npm para __", R6: "gerenciar os pacotes necessários e suas dependências"},
        {Q7: "Usamos props para __", R7: "passar diferentes informações para componentes"},
        {Q8: "Usamos estado (state) para __", R8: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
    ]

    function randomizar() { 
        for(let i = 0; i < deck.length; i ++) {
            console.log(deck)
            deck.sort(Math.random() - 0.5)
        }
    }

    randomizar();
    return (
        <>
            <header>
                <img src="/Imagens/logo-pequeno.png" alt="Logo" />
                <h1>ZapRecall</h1>
            </header>
            <Statement />
            <Footer />
        </>
    )
}