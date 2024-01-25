import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Banner() {
    return (
        <section className="px-[var(--p)] py-28" style={{ backgroundImage: "var(--c4-bg)" }}>
            <div className="container flex items-center flex-col lg:flex-row pt-10 lg:pt-0">
                <div className="w-full lg:w-1/2 flex justify-center flex-col gap-5">
                    <h2 className="font-title text-center sm:text-left text-[var(--c4-txt)] text-4xl text-balance">
                        La tecnología es el Futuro
                    </h2>
                    <h3 className="font-content text-center sm:text-left text-[var(--c4-txt2)] text-3xl text-balance">
                        ¡Y tu lo eres junto a ella!
                    </h3>
                    <p className="font-content2 text-center sm:text-left text-[var(--c4-txt3)] text-3xl text-balance">
                        Si puedes pensarlo, puedes programarlo..
                    </p>
                    <Link
                        to="/register"
                        className="bg-[var(--c1-bg)] text-[var(--c1-txt)] mx-auto sm:m-0 sm:mr-auto p-3 rounded-sm hover:opacity-80 transition-all duration-200 mt-5"
                    >
                        Registrate y da el primer paso
                    </Link>
                    <span className="text-[var(--c4-txt4)] text-center sm:text-left font-content italic text-sm">
                        *Necesitas un correo electrónico
                    </span>
                </div>
                <div className="w-full lg:w-1/2 mt-16 lg:mt-0 p-5 sm:p-10 rounded-2xl aspect-video overflow-hidden shadow-[0_0_100px_0_rgba(255,255,255,0.22)]">
                    <Swiper
                        className="flex w-full h-full rounded-lg"
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        autoplay={{ delay: 5000 }}
                        speed={1500}
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        grabCursor={true}
                    >
                        <SwiperSlide>
                            <img
                                src="./img.slider/1.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="./img.slider/2.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="./img.slider/3.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
