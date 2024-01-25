import courses from "../mook/courses.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
export default function HomeSectionCourses() {
    const [selectedState, setSelectedState] = useState(0);
    return (
        <section className="bg-[--c2-bg] text-[--c2-txt] ">
            <div className=" p-[--p]">
                <div className="flex flex-col container w-full items-center">
                    <div className="flex flex-col w-full items-center sm:p-10 gap-5">
                        <h3 className="font-title text-3xl text-center">
                            ¡No esperes mas, <span className="text-[--c3-txt2]">prende ahora</span>!
                        </h3>
                        <p className="font-content text- text-[var(--c3-txt3)] text-center">
                            Aprende a explotar tus habilidades y talentos, no te pierdas de la
                            oportunidad de aprender de los mejores.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-10">
                        <Item
                            title="Anteriores"
                            src="./image/section-anteriores.png"
                            alt=""
                            text="Revisa los cursos que ya se han impartido, para que no te pierdas de nada."
                            color="#1292ef"
                            isSelected={selectedState === 0}
                            onClick={() => setSelectedState(0)}
                        />
                        <Item
                            title="Proximos"
                            src="./image/section-proximos.png"
                            alt=""
                            text="Ahora tienes la oportunidad de ser parte de los
                                cursos que se estan por impartir."
                            color="#e3627e"
                            isSelected={selectedState === 1}
                            onClick={() => setSelectedState(1)}
                        />
                        <Item
                            title="Activos"
                            src="./image/section-activos.png"
                            alt=""
                            text="Mira que cursos se estan impartiendo en este
                                momento, solo por tiempo limitado."
                            color="#268f44"
                            isSelected={selectedState === 2}
                            onClick={() => setSelectedState(2)}
                        />
                    </div>
                </div>
            </div>
            <div>
                <Slider courses={courses} />
                <Slider courses={courses} reverse={true} />
            </div>
            <div className="container flex w-full items-center p-10">
                <Button text="Ver todos los cursos" className="text-sm  mx-auto " />
            </div>
        </section>
    );
}

function Item({ title, text, src, alt, color, onClick, isSelected }) {
    return (
        <button
            className={`group flex flex-col max-w-96 items-center bg-[#2b2c2e] rounded-lg p-2 md:p-5 lg:p-10 gap-2 md:gap-5  lg:border-solid lg:border-t-4 hover:border-[var(--color)]  hover:opacity-100 transition-all duration-300 ${
                isSelected ? "border-[var(--color)] opacity-100" : "opacity-40"
            }`}
            style={{ "--color": color }}
            onClick={onClick}
        >
            <div className="w-full max-w-7 md:max-w-16 aspect-square">
                <img src={src} alt={alt} className="w-full h-full object-contain" />
            </div>
            <h3
                className={`md:font-title font-sans text-base md:text-xl group-hover:text-[var(--color)] lg:group-hover:text-white lg:text-white transition-all duration-300 ${
                    isSelected ? "text-[var(--color)]" : ""
                }`}
            >
                {title}
            </h3>
            <p className="hidden lg:block font-content text-sm text-[var(--c3-txt3)] text-center">
                {text}
            </p>
        </button>
    );
}

function Slider({ courses = [], reverse = false }) {
    return (
        <Swiper
            className="flex w-full h-full"
            spaceBetween={30}
            slidesPerView="auto"
            centeredSlides={true}
            modules={[Autoplay, FreeMode]}
            autoplay={{
                delay: 500,
                disableOnInteraction: false,
                reverseDirection: reverse,
            }}
            speed={1000}
            loop={true}
            freeMode={true}
        >
            {courses.map((course) => (
                <SwiperSlide key={course.id} className="max-w-52 md:max-w-72 py-10">
                    <Link
                        to="/"
                        className="flex w-full aspect-[5/3] rounded-3xl overflow-hidden hover:scale-[1.15] transition-all duration-200"
                    >
                        <img src={course.src} className="w-full h-full object-cover" />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
