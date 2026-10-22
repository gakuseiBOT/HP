'use client';
import React, { JSX, useSyncExternalStore } from 'react';
import Image from 'next/image';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './index.module.css';

type PropsType = {
  images: string[];
};
const MEDIA_QUERY = '(min-width: 1024px)';

const subscribe = (onChange: () => void) => {
  const mediaQueryList = window.matchMedia(MEDIA_QUERY);
  mediaQueryList.addEventListener('change', onChange);
  return () => mediaQueryList.removeEventListener('change', onChange);
};

const getSnapshot = () => window.matchMedia(MEDIA_QUERY).matches;

// サーバー側の初期状態は false とする
const getServerSnapshot = () => false;

const useIsPc = () => useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

function Mobile({ images }: PropsType): JSX.Element {
  console.log('mobile');
  const slideSettings = {
    0: {
      slidesPerView: 0,
      spaceBetween: 1,
    },
    1024: {
      slidesPerView: 0,
      spaceBetween: 1,
    },
  };
  const imageStyle = '';
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={slideSettings}
      slidesPerView={'auto'}
      centeredSlides={true}
      mousewheel={true}
      freeMode={true}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{
        clickable: true,
      }}
      className={styles.slideWrapper + ' w-full max-w-full'}
    >
      {images.map((src: string, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            alt="Slider Image"
            width={1024}
            height={0}
            sizes="(min-width: 1024px) 100vw, 60vw"
            className={imageStyle}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const PC = ({ images }: PropsType) => {
  console.log('pc');
  const slideSettings = {
    0: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };
  const imageStyle = styles.slideImage;
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={slideSettings}
      slidesPerView={'auto'}
      centeredSlides={true}
      mousewheel={true}
      freeMode={true}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{
        clickable: true,
      }}
      className={styles.slideWrapper + 'w-full max-w-full'}
    >
      {images.map((src: string, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            alt="Slider Image"
            width={1024}
            height={0}
            sizes="(min-width: 1024px) 100vw, 60vw"
            className={imageStyle}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function Slideshow({ images }: PropsType): JSX.Element {
  const isPc = useIsPc();
  return <>{isPc ? <PC images={images} /> : <Mobile images={images} />}</>;
}
