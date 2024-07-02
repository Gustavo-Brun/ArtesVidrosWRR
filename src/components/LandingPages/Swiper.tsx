'use client'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';

import { carouselData } from "@/data/carouselData"
import { Sash } from '../@utils/Sash';
import Link from 'next/link';
import Image from 'next/image';

export const SwiperCarousel = () => {


    return (

        <section className="p-6 py-10 shadow-2xl bg-white overflow-hidden ">

            <div className="mt-4 mb-14">
                <Sash text="Conheça nosso Trabalho" />
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
                effect={'cards'}
                grabCursor={true}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {carouselData.map(({ id, image }) => {
                    return (
                        <SwiperSlide key={id} className='pb-10'>
                            <Image
                                src={image}
                                alt={'Slider Image.'}
                                height={300}
                                width={300}
                                style={{ objectFit: 'cover' }}
                                className='mx-auto'
                            />
                        </SwiperSlide>)
                })}
            </Swiper>

            <Link
                target="_blank"
                href={"https://www.instagram.com/artesvidroswrr/"}
                className='flex w-fit mx-auto mt-10 text-2xl shadow-md text-white p-3  bg-black font-mono font-bold transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-red-600'
            >
                Ver mais
            </Link>

        </section>
    );
};