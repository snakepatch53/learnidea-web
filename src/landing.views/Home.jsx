import { Link } from "react-router-dom";
import AnimatedElement from "../components/AnimatedElement";
import Banner from "../landing.components/Banner";
import Button from "../landing.components/Button";

import "swiper/css";
import "swiper/css/pagination";
import HomeSectionCourses from "../landing.components/HomeSectionCourses";

export default function Home() {
    return (
        <AnimatedElement>
            <Banner />
            <section className="bg-[--c3-bg] text-[--c3-txt] ">
                <div className="flex flex-col container w-full items-center p-[--p]">
                    <div className="flex flex-col w-full items-center sm:p-10 gap-3">
                        <h3 className="font-title text-3xl text-center">
                            ¿Que puedes aprender en{" "}
                            <span className="text-[--c3-txt2]">Learnidea</span>?
                        </h3>
                        <p className="font-content text- text-[var(--c3-txt3)] text-center">
                            Certificados avalados por Instituciones publicas y privadas.
                        </p>
                    </div>
                    <Link className="group/item flex flex-col items-center gap-5 sm:flex-row  max-w-[900px] bg-[#162936] py-10 px-5 sm:px-10">
                        <div className="flex flex-col justify-center gap-10">
                            <h3 className="font-title text-2xl text-center sm:text-start">
                                Programacion, música, fibra óptica, educacion de educadores.
                            </h3>
                            <p className="font-content text-[var(--c3-txt3)] text-center sm:text-start">
                                !Domina areas en tendencia y conviertete en un experto! Estudia
                                desde cero hasta experto, con cursos de prcgramacion, musica, fibra
                                optica, educacion de educadores. y mucho mas.
                            </p>
                        </div>
                        <img
                            src="./image/tecnologys.png"
                            alt=""
                            className="max-w-[200px] object-contain group-hover/item:scale-110 transition-all"
                        />
                    </Link>
                    <div className="flex flex-col items-center">
                        <div className="flex-col sm:grid  sm:grid-cols-2 lg:grid-cols-4 py-10 gap-5">
                            <Item
                                title="Programacion"
                                src="./img.areas/1.png"
                                text="iAprende a programar desde cero!
                                domina los lenguajes de
                                programación mas usados en el
                                mundo, como Java, Python, PHR
                                JavaScript, y mucho mas."
                                alt=""
                            />
                            <Item
                                title="Musica"
                                src="./img.areas/2.png"
                                text="iAprende desde teoria musical hasta
                                ser un experto en cualquier rama de
                                la musical domina la guitarra, piano,
                                bateria, canto, y mucho mas."
                                alt=""
                            />
                            <Item
                                title="Programacion"
                                src="./img.areas/3.png"
                                text="!Aprende a instalar y configurar redes
                                de fibra optica! domina habilidades
                                de fibra opte, conectorizacion,
                                empalmes, reparaciones,
                                construccion de troncales,
                                derivaciones y mucho mas."
                                alt=""
                            />
                            <Item
                                title="Programacion"
                                src="./img.areas/4.png"
                                text="iAprende a ser un mejor educador!
                                domina habilidades de educacion,
                                conoce las mejores tecnicas de
                                enseñanza, aprende a crear tus
                                propios cursos, y mucho mas."
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button text="Empezar ahora" className="text-sm  mx-auto " />
                            <span className="font-content text-[var(--c3-txt3)] text-sm italic">
                                *Nesecitas un correo electronico
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <HomeSectionCourses />
        </AnimatedElement>
    );
}

function Item({ title, text, src, alt }) {
    return (
        <button className="group/item flex flex-col max-w-80 h-full items-center gap-3 p-5 hover:bg-[--c2-bg] rounded-lg ">
            <img
                src={src}
                alt={alt}
                className="max-w-32 aspect-auto group-hover/item:scale-110 transition-all"
            />
            <h3 className="font-title text-2xl">{title}</h3>
            <p className="font-content text-sm text-[var(--c3-txt3)] text-center">{text}</p>
        </button>
    );
}
