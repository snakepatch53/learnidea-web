import AnimatedElement from "../components/AnimatedElement";
import Button from "../landing.components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import courses from "../mook/courses.json";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";

export default function Cursos() {
    return (
        <AnimatedElement>
            <section className="relative font-content text-[--c2-txt] pt-40 bg-[--c5-bg] p-[--p]">
                <img
                    src="./image/frontpage-bg.png"
                    className="absolute top-0 right-0 h-full object-cover"
                    alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[--c5-bg] via-[--c5-bg] to-transparent" />
                <div className="relative z-10 container flex flex-col gap-5 md:flex-row pb-10">
                    <div className="flex flex-col w-full gap-10 md:gap-5">
                        <h3
                            className="font-title text-2xl md:text-5xl text-center md:text-left text-balance"
                            style={{
                                textShadow:
                                    "1px 0 1px #000, -1px 0 1px #000, 0 1px 1px #000, 0 -1px 1px #000",
                            }}
                        >
                            Mira todos nuestros cursos
                        </h3>
                        <p
                            className="text-xl md:text-2xl text-center md:text-left text-[#52b0f4] text-balance"
                            style={{
                                textShadow:
                                    "1px 0 1px #000, -1px 0 1px #000, 0 1px 1px #000, 0 -1px 1px #000",
                            }}
                        >
                            Conviertete en un profesional en el area que mas te guste
                        </p>
                        <div className="flex justify-center md:justify-start w-full ">
                            <Button
                                text="!Registrate ahora¡"
                                className="font-title  bg-[var(--c9-bg)] text-[var(--c9-txt)]"
                            />
                        </div>
                    </div>
                    <div className="flex w-full justify-center">
                        <img
                            src="./image/frontpage1.png"
                            alt=""
                            className="flex h-full max-h-60 object-contain pointer-events-none"
                        />
                    </div>
                </div>
            </section>
            <section className=" font-content text-[--c2-txt] bg-[--c2-bg] p-[--p]">
                <div className="container flex flex-col gap-10">
                    <div id="proximos">
                        <h3 className="mb-4">🔥 Cursos proximos</h3>
                        <Slider courses={courses} />
                    </div>
                    <div id="concluidos">
                        <h3 className="mb-4">✨ Cursos concluidos</h3>
                        <Slider courses={courses} />
                    </div>
                    <div id="progreso">
                        <h3 className="mb-4">🎉 Cursos en progreso</h3>
                        <Slider courses={courses} />
                    </div>
                </div>
            </section>
        </AnimatedElement>
    );
}

function Slider({ courses = [] }) {
    return (
        <Swiper
            className="swiper-slider-cursos-page flex w-full h-full"
            modules={[Navigation]}
            navigation={true}
            slidesPerView={4}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1280: {
                    slidesPerView: 5,
                },
            }}
            spaceBetween={30}
            speed={1000}
            loop={true}
        >
            {courses.map((course) => (
                <SwiperSlide key={course.id} className="group">
                    <Link to="/" className="flex w-full aspect-[5/3] rounded-xl overflow-hidden">
                        <img
                            src={course.src}
                            className="w-full h-full object-cover group-hover:scale-[1.15] transition-all duration-200"
                        />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
