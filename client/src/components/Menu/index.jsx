import { Container } from "./styled"
import { NavLink } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
import { IoMdPersonAdd } from "react-icons/io"
import { BsInfoCircleFill, BsTable } from "react-icons/bs"

export function Menu() {
    return (
        <Container>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? "select" : ""}>
                            <AiFillHome/>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={({isActive}) => isActive ? "select" : ""}>
                            <IoMdPersonAdd/>
                            Cadastro
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/students" className={({isActive}) => isActive ? "select" : ""}>
                            <BsTable/>
                            Alunos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => isActive ? "select" : ""}>
                            <BsInfoCircleFill/>
                            Sobre
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}