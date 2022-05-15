export default function Footer ({answered, listaIcones}) {
    return (
        <div className="footerContainer">
            <span>{answered}/8 CONCLUÍDOS</span>
            <div>{listaIcones}</div>
        </div>
    )
}