'use client'

import { IReview } from "@/interfaces/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "../reviews/Review/Review";

import 'swiper/css';

type Props = {
  data: IReview[]
}

export default function CustomSwiper({ data }: Props) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
    >
      {data ?
        data.map((review: IReview) => (
          <SwiperSlide key={review.id}>
            <Review data={review} />
          </SwiperSlide>
        ))
        : 'Упс, кажется нету отзывов!'}
    </Swiper>
  )
}