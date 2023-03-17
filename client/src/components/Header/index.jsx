import { Container } from "./style"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { useState } from "react"
import { Menu } from "../Menu"
import { Link } from "react-router-dom"

export function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const toggleMenuIcon = () => setMenuActive(!menuActive);

    return (
        <>
            <Container>
                <button onClick={toggleMenuIcon}>
                    {
                        menuActive ?
                        <IoMdClose className="menuIcon"/> :
                        <IoMdMenu className="menuIcon"/>
                    }
                </button>  
                <div className="logoMenu">
                    <div>
                        <h1>Sistema de Estudantes</h1>
                        <h3>Curso de Desenvolvimento Web</h3>
                    </div>
                    <Link to="/" onClick={menuActive ? toggleMenuIcon : ""}>
                        <img src="./logo-rj.png" alt="logo" />
                    </Link>
                </div>
            </Container>

            <div onClick={toggleMenuIcon}>
                {menuActive && <Menu/>}
            </div>
        </>
    )
}