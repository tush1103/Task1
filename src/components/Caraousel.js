
import { Swiper, SwiperSlide } from 'swiper/react';
import Section2 from "./Section2";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
const Caraousel=()=>{
    return(
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-[90vw]">
        <SwiperSlide><Section2/></SwiperSlide>
        <SwiperSlide><Section2/></SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    )
}

export default Caraousel;