import Footer from "./Footer";
import Statement from "./Statement";

function Statements () {
    return (
        <>
            <Statement card="1" position="0" />
            <Statement card="2" position="1" />
            <Statement card="3" position="2" />
            <Statement card="4" position="3" />
            <Statement card="5" position="4" />
            <Statement card="6" position="5" />
            <Statement card="7" position="6" />
            <Statement card="8" position="7" />
        </>
    )
}

export default function MainPage () {
    return (
        <div className="mainContainer">
            <header>
                <img src="/Imagens/logo-pequeno.png" alt="Logo" />
                <h1>ZapRecall</h1>
            </header>
            <Statements />
            <Footer />
        </div>
    )
}