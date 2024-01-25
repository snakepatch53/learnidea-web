import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import info from "../mook/info.json";
import Chronometer from "../components/Chronometer";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const BEFFORE_HEADER_HEIGHT = 50;
    const [isUnderHeader, setIsUnderHeader] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const defineScrollY = () => {
            if (window.scrollY < BEFFORE_HEADER_HEIGHT) {
                setIsUnderHeader(false);
                const top = BEFFORE_HEADER_HEIGHT - window.scrollY;
                setScrollY(top);
            } else {
                setIsUnderHeader(true);
                setScrollY(0);
            }
        };
        window.onscroll = () => defineScrollY();
        defineScrollY();
    }, []);
    return (
        <>
            <header>
                <div className="bg-[var(--c1-bg)] text-[var(--c1-txt)] h-[var(--b-header-h)] px-[var(--p)]">
                    <div className="container flex justify-center items-center gap-5 md:gap-20 h-full">
                        <h3 className="font-content tracking-wide text-center text-ellipsis text-nowrap overflow-hidden">
                            ¡Programación Orientada a Objetos!
                        </h3>
                        <Chronometer
                            datetime="2024-01-24 22:52"
                            classNameFinish="hidden md:flex"
                            className="hidden md:flex"
                        />
                        <Button to="/login" style="2" className="px-2 py-[8px]">
                            <FontAwesomeIcon icon={faStar} />
                            <span className="font-bold">Inscripción</span>
                        </Button>
                    </div>
                </div>
                <div
                    className={`
                        fixed z-50 w-full h-[var(--header-h)] 
                        
                    `}
                    style={{
                        top: scrollY + "px",
                        backgroundColor: "transparent", //
                    }}
                >
                    <div className="relative w-full h-full px-[var(--p)]">
                        <div
                            className={`
                                absolute inset-0 backdrop-blur-md 
                                ${isUnderHeader ? "bg-[var(--c8-bg)] lg:bg-[var(--c8-bg)]" : ""} 
                                ${isMenuOpen ? "bg-[var(--c8-bg)] lg:bg-transparent" : ""}
                            `}
                        />
                        <div className="relative z-10 container flex items-center gap-5 h-full">
                            <Link to="/" className="flex justify-center items-center h-full">
                                <div className="h-full aspect-square p-2">
                                    <Logo
                                        className={`w-full h-full fill-[--color]`}
                                        style={{
                                            "--color": isUnderHeader
                                                ? "var(--c1-bg)"
                                                : "var(--c1-txt)",
                                        }}
                                    />
                                </div>
                                <h1 className="block text-2xl font-logo text-[var(--c8-txt)]">
                                    {info.name}
                                </h1>
                            </Link>
                            <div
                                className={`
                                    lg:static lg:flex-row lg:right-0 lg:opacity-100 lg:max-w-none lg:w-auto lg:height-full lg:max-h-full 
                                    lg:flex-1 flex lg:h-full
        
                                    flex-col
                                    fixed bottom-0 z-50 w-full max-w-80  
                                    transition-all duration-300 
                                    ${isMenuOpen ? "right-0 opacity-100" : "-right-full opacity-0"}
                                `}
                                style={{
                                    height: `calc(100dvh - (var(--header-h) + ${scrollY}px))`,
                                }}
                            >
                                <div className="relative flex flex-col lg:flex-row w-full h-full">
                                    <div
                                        className={`
                                            absolute inset-0 backdrop-blur-md bg-[var(--c8-bg)] lg:bg-transparent
                                        `}
                                    />
                                    <nav
                                        className={`
                                            lg:flex-row
                                            flex items-center lg:gap-2 h-full text-[var(--c8-txt)] 
            
                                            flex-col
                                        `}
                                    >
                                        <Option to="/" name="Home" />
                                        <Option to="/cursos" name="Cursos">
                                            <Option
                                                name="Próximos"
                                                href="/cursos#proximos"
                                                tagType="a"
                                            />
                                            <Option
                                                name="Concluidos"
                                                href="/cursos#concluidos"
                                                tagType="a"
                                            />
                                            <Option
                                                name="En progreso"
                                                href="/cursos#progreso"
                                                tagType="a"
                                            />
                                        </Option>
                                        <Option to="/nosotros" name="Nosotros">
                                            <Option to="/nosotros/equipo" name="Equipo" />
                                            <Option to="/nosotros/conceptos" name="Conceptos" />
                                        </Option>
                                        <Option to="/contactos" name="Contactos">
                                            <Option
                                                to="/contactos/redes-sociales"
                                                name="Redes sociales"
                                            />
                                            <Option
                                                to="/contactos/formulario"
                                                name="Envíanos un mensaje"
                                            />
                                        </Option>
                                    </nav>
                                    <div className="relative z-10 w-full lg:w-auto ml-auto flex items-center gap-1 lg:gap-3 px-3 lg:px-0 mb-3 lg:mb-0">
                                        <button
                                            onClick={() => setIsSearchOpen(true)}
                                            className="hidden lg:flex justify-center items-center w-10 aspect-square hover:bg-black/30 rounded-full transition-all duration-300"
                                        >
                                            <FontAwesomeIcon
                                                icon={faSearch}
                                                className="text-[var(--c8-txt)] text-lg"
                                            />
                                        </button>
                                        <Button
                                            text="Iniciar sesión"
                                            to="/login"
                                            style="3"
                                            className="p-2 py-[9px] flex-1 lg:flex-none"
                                        />
                                        <Button
                                            text="Registrate"
                                            to="/registrar"
                                            className="p-2 py-[7px] flex-1 lg:flex-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                className="flex lg:hidden justify-center items-center w-10 aspect-square rounded-lg hover:bg-black/20 transition-all duration-300 ml-auto outline-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <FontAwesomeIcon
                                    icon={faBars}
                                    className="text-[var(--c1-txt)] text-lg"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
        </>
    );
}

function Option({ children, to, name, tagType = "link", ...props }) {
    let Tag = Link;
    if (tagType === "a") Tag = "a";
    return (
        <div className="relative group flex flex-col w-full lg:w-auto lg:h-full">
            <Tag
                to={to}
                className={`
                    flex lg:justify-center items-center gap-1 lg:h-full opacity-80 hover:opacity-100 transition-all duration-200 font-link text-[var(--c8-txt)] text-nowrap lg:px-1 lg:py-0 lg:border-0 
                    py-2 px-5 
                    ${children ? "border-y border-solid border-y-white/10" : ""}
                `}
                {...props}
            >
                {name}
                {children && (
                    <>
                        <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                    </>
                )}
            </Tag>
            {children && (
                <div
                    className={`
                        lg:absolute 
                        flex flex-col gap-1 top-full lg:left-1/2 lg:-translate-x-1/2 lg:min-w-full rounded-lg lg:shadow-md overflow-hidden lg:border lg:border-solid lg:border-white/20 lg:max-h-0 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:max-h-48 transition-[padding,max-height,opacity] duration-200 
                        static
                    `}
                >
                    <div className="relative w-full h-full lg:group-hover:py-3 lg:group-hover:px-5 transition-[padding,max-height,opacity] duration-200">
                        <div
                            className={`
                                absolute inset-0 backdrop-blur-sm lg:bg-[var(--c8-bg)] bg-transparent
                            `}
                        />
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}

function Search({ isSearchOpen, setIsSearchOpen }) {
    const _window = useRef();
    if (_window.current) {
        _window.current.onclick = (e) => {
            if (e.target === _window.current) setIsSearchOpen(false);
        };
    }
    window.onkeydown = (e) => (e.key === "Escape" ? setIsSearchOpen(false) : null);
    return (
        <div
            className={
                "fixed inset-0 z-50 justify-center items-center " +
                (isSearchOpen ? "flex" : "hidden")
            }
        >
            <div ref={_window} className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" />
            <div className="relative z-50 flex items-center rounded-full overflow-hidden shadow-xl bg-white px-7 w-full max-w-[700px] border-[2px] border-solid border-[--c1-bg]">
                <input
                    type="text"
                    placeholder="¿Qué quieres aprender hoy?"
                    className="flex-1 bg-transparent py-5 text-xl placeholder:text-black outline-none"
                />
                <FontAwesomeIcon icon={faSearch} className=" text-2xl text-[--c1-bg]" />
            </div>
        </div>
    );
}
