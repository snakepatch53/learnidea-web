import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header>
            <div className="fixed top-0 w-full h-[var(--header-h)]">
                <div className="container flex items-center gap-5 h-full">
                    <Link to="/" className="h-full aspect-square p-2">
                        <Logo className="w-full h-full fill-white" />
                    </Link>
                    <nav className="flex items-center gap-2 h-full text-white">
                        <Option to="/" name="Home" />
                        <Option to="/cursos" name="Cursos">
                            <Option to="/cursos/proximos" name="Próximos" />
                            <Option to="/cursos/concluidos" name="Concluidos" />
                            <Option to="/cursos/progrso" name="En progreso" />
                        </Option>
                        <Option to="/nosotros" name="Nosotros">
                            <Option to="/nosotros/equipo" name="Equipo" />
                            <Option to="/nosotros/conceptos" name="Conceptos" />
                        </Option>
                        <Option to="/contactos" name="Contactos">
                            <Option to="/contactos/redes-sociales" name="Redes sociales" />
                            <Option to="/contactos/formulario" name="Envíanos un mensaje" />
                        </Option>
                    </nav>
                    <div className="ml-auto flex items-center gap-3">
                        <button className="flex justify-center items-center w-10 aspect-square hover:bg-black/30 rounded-full transition-all duration-300">
                            <FontAwesomeIcon icon={faSearch} className="text-white text-lg" />
                        </button>
                        <Link
                            to="/login"
                            className="p-2 rounded-sm text-white hover:bg-black/30 transition-all duration-200"
                        >
                            Iniciar sesión
                        </Link>
                        <Link
                            to="/register"
                            className="p-2 rounded-sm bg-[var(--c1-bg)] text-[var(--c1-txt)] hover:opacity-80 transition-all duration-200"
                        >
                            Registrarse
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

function Option({ children, to, name }) {
    return (
        <div className="relative group flex h-full">
            <Link
                to={to}
                className="flex justify-center items-center gap-1 h-full opacity-80 hover:opacity-100 transition-all duration-200 text-white text-nowrap px-1"
            >
                {name}
                {children && (
                    <>
                        <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                    </>
                )}
            </Link>
            {children && (
                <div className="absolute flex flex-col gap-1 top-full left-1/2 -translate-x-1/2 min-w-full bg-[var(--c2-bg)] rounded-lg shadow-md overflow-hidden border border-solid border-white/20 max-h-0 opacity-0 group-hover:opacity-100 group-hover:max-h-48 group-hover:px-5 group-hover:py-3 transition-all duration-200">
                    {children}
                </div>
            )}
        </div>
    );
}
