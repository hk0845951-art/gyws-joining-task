import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const WordFlashText = ({ text, active }) => {
  if (!active) return null;
  const words = text.split(' ');

  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-[wordFade_0.4s_ease-out_forwards]"
          style={{ animationDelay: `${i * 0.15}s`, marginRight: '0.25em' }}
        >
          {word}
        </span>
      ))}
    </>
  );
};

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      img: "/image2.jpg",
      text: "Bring LiGHT to your Campus",
      subtext: "Apply for a LiGHT Center in your college and empower your college students to be a Change Maker",
      btnText: "Join with us"
    },
    {
      img: "/image3.jpg",
      text: "Together we can make a difference",
      subtext: "Giving is not just about making a donation. It is about making a difference",
      btnText: "Donate Now"
    }
  ];

  return (
    <div className='w-full block relative z-10 h-screen bg-black custom-swiper-container'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full overflow-hidden relative">
            <img 
              src={slide.img} 
              alt={`Slide ${index + 1}`} 
              className='w-full h-full object-cover object-center' 
            />
            
            <div className='absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center p-4 z-20'>
              <div className='max-w-4xl flex flex-col items-center'>
                
                <h1 className='text-white text-4xl md:text-6xl font-bold drop-shadow-xl mb-4 tracking-wide min-h-[60px]'>
                  <WordFlashText text={slide.text} active={activeIndex === index} />
                </h1>
                
                <p className='text-gray-200 text-lg md:text-xl font-medium max-w-2xl drop-shadow-md mb-8 leading-relaxed min-h-[40px]'>
                  {slide.subtext }
                </p>
                
                <button className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3.5 rounded text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg z-30 block relative'>
                  {slide.btnText}
                </button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;


