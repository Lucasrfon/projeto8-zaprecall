function TipoFooter ({answered, listaIcones, image, result, text}) {
    return (
        <div className="footerContainer">
            <div>
                <img src={image} alt="Resultado img" />
                <h6>{result}</h6>
            </div>
            <div className="descricao">{text}</div>
            <span>{answered}/8 CONCLUÍDOS</span>
            <div className="icones">
                {listaIcones.map((i) => <ion-icon name={i}></ion-icon>)}
            </div>
        </div>
    )
}

export default function Footer ({ answered, listaIcones, erro }) {
    
    if(answered === 8) {
        if(erro) {
            return <TipoFooter image={"./Imagens/sad.png"} result={"Putz..."} text={"Ainda faltam alguns... Mas não desanime!"} answered={answered} listaIcones={listaIcones} />
        }
        return <TipoFooter image={"./Imagens/party.png"} result={"Parabéns!"} text={"Você não esqueceu de nenhum flashcard!"} answered={answered} listaIcones={listaIcones} />
    }
    return (
        <div className="footerContainer">
            <span>{answered}/8 CONCLUÍDOS</span>
            <div className="icones">
                {listaIcones.map((i) => <ion-icon name={i}></ion-icon>)}
            </div>
        </div>
    )
}