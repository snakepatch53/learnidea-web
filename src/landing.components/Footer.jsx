import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faYoutube,
    faTwitter,
    faWhatsapp,
    faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer>
            <div className="bg-[--c7-bg] text-[--c7-txt] font-content p-[--p]">
                <div className="flex flex-col container sm:grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10 gap-5">
                    <div className="flex flex-col gap-5 ">
                        <Link to="/" className="flex items-center gap-2 ">
                            <div className="w-14 aspect-square">
                                <Logo className="fill-white" />
                            </div>
                            <h1 className="font-logo text-2xl">Learnidea</h1>
                        </Link>
                        <p className=" text-sm text-[--c7-txt2] max-h-[130px] pt-2 overflow-hidden">
                            Leanidea es una entidad educativa que busca brindar a sus estudiantes
                            una educación de calidad, con profesores altamente capacitados y con una
                            metodología de enseñanza innovadora. En leanidea puedes capacitarte
                            hasta convertirte en un experto en cualquier área de tu interés y
                            obtener un certificado avalado por instituciones públicas y privadas que
                            afirmaran tu conocimiento para trabajar en cualquier empresa.
                        </p>
                        <Link to="" className="hover:underline text-[--c7-txt2]">
                            Ver mas
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5 ">
                        <h1 className="font-title ">Misión</h1>
                        <p className=" text-sm text-[--c7-txt2] max-h-40 overflow-hidden">
                            En Learnidea, nuestra misión es ofrecer una educación en linea de alta
                            calidad y accesible en áreas de tendencia como tecnología, música, fibra
                            óptica y educación de educadores. Nos esforzamos por brindar una
                            experiencia educativa innovadora y efectiva, fomentando el aprendizaje
                            continuo y el crecimiento profesional. En Learnidea, estamos
                            comprometidos con el desarrollo de nuestra comunidad y trabajamos para
                            democratizar el acceso al conocimiento y hacer que la educación sea más
                            accesible y efectiva.
                        </p>
                        <Link to="" className="hover:underline text-[--c7-txt2]">
                            Ver mas
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5 ">
                        <h1 className="font-title ">Visión</h1>
                        <p className=" text-sm text-[--c7-txt2] max-h-40 overflow-hidden">
                            En Learnidea, buscamos ser líderes en capacitación de alta calidad en
                            nuestra región, brindando una experiencia educativa innovadora y
                            efectiva en áreas de tendencia como tecnología, música, fibra óptica y
                            educación de educadores. Nos esforzamos por democratizar el acceso al
                            conocimiento y ayudar a desarrollar el potencial de nuestra comunidad.
                        </p>
                        <Link to="" className="hover:underline text-[--c7-txt2]">
                            Ver mas
                        </Link>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-title ">Enlaces</h1>
                        <Link to="" className=" text-sm text-[--c7-txt2] hover:underline">
                            Inicio
                        </Link>
                        <Link to="" className=" text-sm text-[--c7-txt2] hover:underline">
                            Cursos
                        </Link>
                        <Link to="" className=" text-sm text-[--c7-txt2] hover:underline">
                            Nosotros
                        </Link>
                        <Link to="" className=" text-sm text-[--c7-txt2] hover:underline">
                            Contacto
                        </Link>
                        <Link to="" className=" text-sm text-[--c7-txt2] hover:underline">
                            Registrarse
                        </Link>
                        <Link to="" className=" text-sm text-[--c7-txt2] hover:underline">
                            Iniciar sesion
                        </Link>
                        <Link to="" className=" text-sm text-[--c7-txt2] hover:underline">
                            Terminos y Condiciones de Uso
                        </Link>
                        <Link to="" className=" text-sm text-[--c7-txt2] hover:underline">
                            Política de Privacidad
                        </Link>
                        <Link to="" className=" text-sm text-[--c7-txt2] hover:underline">
                            Política de Ccokies
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-title ">Instituciones avaladas</h1>
                        <a
                            href="#"
                            className=" text-sm text-[--c7-txt2] hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instituto Tecnologico Superior Sucua
                        </a>
                        <a
                            href="#"
                            className=" text-sm text-[--c7-txt2] hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            CursosSecretaria de Educacion Ciencia, Tenologia e Innovacion
                        </a>
                        <a
                            href="#"
                            className=" text-sm text-[--c7-txt2] hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Centro de Tecnologia de Entretenimiento y Capacitacion
                        </a>
                        <a
                            href="#"
                            className=" text-sm text-[--c7-txt2] hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            learnidea
                        </a>
                        <a
                            href="#"
                            className=" text-sm text-[--c7-txt2] hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ideasoft
                        </a>
                    </div>
                </div>
                <div className="container flex flex-col sm:flex-row py-10 gap-5 sm:gap-5 border-solid border-t border-gray-700 items-center ">
                    <span className="text-sm text-center sm:text-left text-[--c7-txt2] w-full ">
                        @ 2024 Learnidea.Todos los derechos reservados.
                    </span>
                    <div className="flex justify-between w-full max-w-48 sm:justify-end sm:gap-5">
                        <Item to="" icon={faFacebookF} color="#3b5998"></Item>
                        <Item to="" icon={faInstagram} color="#6339b4"></Item>
                        <Item to="" icon={faYoutube} color="#fb0000"></Item>
                        <Item to="" icon={faTwitter} color="#1da1f2"></Item>
                        <Item to="" icon={faWhatsapp} color="#25b93c"></Item>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function Item({ to, icon, color }) {
    return (
        <a href={to} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
                icon={icon}
                className="flex text-[--c7-txt2] hover:scale-125 hover:text-[var(--color)] transition-all"
                style={{ "--color": color }}
            />
        </a>
    );
}
