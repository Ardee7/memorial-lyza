import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const SwiperCarousel = ({
  contentList,
}: {
  contentList: React.ReactNode[];
}) => (
  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {contentList.map((Item, index) => (
      <SwiperSlide key={index}>{Item}</SwiperSlide>
    ))}
  </Swiper>
);
