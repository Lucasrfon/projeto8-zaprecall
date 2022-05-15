import React,{useState} from "react";
import Footer from "./Footer";
import Statement from "./Statement";

export default function MainPage () {
    const [answered, setAnswered] = useState(0)
    const [listaIcones, setListaIcones] = useState([])

    return (
        <div className="mainContainer">
            <header>
                <img src="/Imagens/logo-pequeno.png" alt="Logo" />
                <h1>ZapRecall</h1>
            </header>
            <Statement position={0} setAnswered={setAnswered} answered={answered} setListaIcones={setListaIcones} listaIcones={listaIcones} />
            <Statement position={1} setAnswered={setAnswered} answered={answered} setListaIcones={setListaIcones} listaIcones={listaIcones} />
            <Statement position={2} setAnswered={setAnswered} answered={answered} setListaIcones={setListaIcones} listaIcones={listaIcones} />
            <Statement position={3} setAnswered={setAnswered} answered={answered} setListaIcones={setListaIcones} listaIcones={listaIcones} />
            <Statement position={4} setAnswered={setAnswered} answered={answered} setListaIcones={setListaIcones} listaIcones={listaIcones} />
            <Statement position={5} setAnswered={setAnswered} answered={answered} setListaIcones={setListaIcones} listaIcones={listaIcones} />
            <Statement position={6} setAnswered={setAnswered} answered={answered} setListaIcones={setListaIcones} listaIcones={listaIcones} />
            <Statement position={7} setAnswered={setAnswered} answered={answered} setListaIcones={setListaIcones} listaIcones={listaIcones} />
            <Footer answered={answered} listaIcones={listaIcones}/>
        </div>
    )
}