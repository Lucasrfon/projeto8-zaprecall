import React from "react";
import Footer from "./Footer";
import Statement from "./Statement";

function Statements ({setAnswered, answered}) {

    return (
        <>
            <Statement card="1" position="0" setAnswered={setAnswered} answered={answered} />
            <Statement card="2" position="1" setAnswered={setAnswered} answered={answered} />
            <Statement card="3" position="2" setAnswered={setAnswered} answered={answered} />
            <Statement card="4" position="3" setAnswered={setAnswered} answered={answered} />
            <Statement card="5" position="4" setAnswered={setAnswered} answered={answered} />
            <Statement card="6" position="5" setAnswered={setAnswered} answered={answered} />
            <Statement card="7" position="6" setAnswered={setAnswered} answered={answered} /> 
            <Statement card="8" position="7" setAnswered={setAnswered} answered={answered} />
        </>
    )
}

export default function MainPage () {
    const [answered, setAnswered] = React.useState(0)

    return (
        <div className="mainContainer">
            <header>
                <img src="/Imagens/logo-pequeno.png" alt="Logo" />
                <h1>ZapRecall</h1>
            </header>
            <Statements setAnswered={setAnswered} answered={answered} />
            <Footer answered={answered} />
        </div>
    )
}