import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';


export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
    >
      <SwiperSlide>
        <div className='md:h-[32rem]' >
         <img src="/img1.jpg" alt="" className='object-cover object-center  blur-sm grayscale' /> 
         <div
         className='text-white font-semibold md:text-4xl absolute md:top-[40%] top-[30%] md:left-[10%] left-[11%] w-3/4 text-center ' >
         vKiwiTech excels in SAP solutions and brings a wealth of expertise to elevate your online presence through cutting-edge web design and development.
         </div>
        </div>
         </SwiperSlide>
      <SwiperSlide>
        <div className='md:h-[32rem]' >
         <img src="/img2.jpg" alt=""  className='object-cover object-center blur-sm grayscale ' /> 
         <div className='text-white font-semibold md:text-4xl absolute md:top-[40%] top-[30%] md:left-[10%] left-[11%] w-3/4 text-center' >
         At vKiwiTech, we specialize in crafting visually stunning and user-centric websites, seamlessly blending creativity with functionality to elevate your digital presence.
         </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='md:h-[32rem]' >
         <img src="/img3.jpg" alt="" className='object-cover object-center blur-sm grayscale ' /> 
         <div className='text-white font-semibold md:text-4xl absolute md:top-[40%] top-[30%] md:left-[10%] left-[11%] w-3/4 text-center' >
         We excel in delivering cutting-edge SAP solutions, optimizing business operations with precision and innovation, ensuring your path to sustained growth is seamlessly streamlined.
         </div>
        </div>
         </SwiperSlide>
    </Swiper>
  );
};