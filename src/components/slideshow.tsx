'use client';
import { SwiperOptions } from 'swiper/types';
import { JSX, useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/index.module.css';

type SwiperSetting = {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
}

type PropsType = {
  images: string[];
};
const useIsPc = () => {
  // 初期状態をサーバー側で false とする
  const [isPc, setIsPc] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(min-width: 1024px)');
    const listener = () => setIsPc(mediaQueryList.matches);

    // 初回に現在の状態を設定
    setIsPc(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', listener);

    return () => mediaQueryList.removeEventListener('change', listener);
  }, []);

  return isPc;
};

function Mobile({ images }: PropsType): JSX.Element {
  console.log('mobile');
  const slideSettings = useMemo<SwiperSetting>(() => ({
    0: {
      slidesPerView: 0,
      spaceBetween: 1,
    },
    1024: {
      slidesPerView: 0,
      spaceBetween: 1,
    },
  }), []);
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
  const slideSettings = useMemo<SwiperSetting>(() => ({
    0: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  }), []);
  const imageStyle = useMemo(() => styles.slideImage, [styles]);
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
