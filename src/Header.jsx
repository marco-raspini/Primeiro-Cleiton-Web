import './Header.css'
import Child from "./imagens/logo_calcular.jpeg"

function Header() {
    return (
        <>
            <div className="header">
                <div className="imageLogo">
                    <img src={Child}/>
                </div>
                <div className="headerText">
                    <p>Ferramenta de aprendizado de calculo</p>
                    <p>07/06/2022</p>
                </div>
            </div>
        </>
    )
}

export default Header