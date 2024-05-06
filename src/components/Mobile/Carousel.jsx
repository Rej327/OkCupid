import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { Pagination } from "swiper/modules";
import StoriesItem from "../Mobile/StoriesItem";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./CustomSwiperPagination.css";

const Carousel = () => {
	return (
		<Swiper
			slidesPerView={1}
			modules={[Scrollbar, Pagination]}
			// pagination={{
			//     clickable: true,
			//     bulletClass: "bullet",
			//     bulletActiveClass: "bullet-active",
			// }}
			scrollbar={{ draggable: true }}
		>
			<SwiperSlide>
				<StoriesItem
					context="“Both of us lived in the Bay Area for years but had no
						idea each other existed until OKCupid brought us
						together in the sunny summer of ’16. We knew after the
						first date when we both had butterflies and barely
						touched our lunches that we were each other’s someone
						special. Love can spring from anywhere given the chance
						and we will always be grateful to OKCupid for helping
						give us our chance and being the start to our strong and
						beautiful relationship.”"
					persons="CARLENE AND COLIN"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<StoriesItem
					context="We met on OkCupid way back in 2013. Online dating can be intimidating but connecting on OKC was simple. We got to see and read a little about each other, message back and forth, and eventually meet in person! That one message was life changing. It led us to start dating, move in together, get married, and we just welcomed our first child in 2021! I’m so thankful that OKC (and Michelle’s bravery) led me to my adventure partner for life.”"
					persons="CANDACE AND MICHELLE"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<StoriesItem
					context="“The wildest part is that, when we met, it was her first night on the app! We had a lot in common, from a love of burgers to Todd Rundgren, and both of us rearranged our schedules to meet up as soon as we possibly could. That was in 2016. Almost 6 years later, we are married, we have two cats, a niece and a nephew. We are each other’s family, and we gained new, amazing extended families as well. We love everything about one another, aside from the times we have to be apart. We’ve built this amazing life together and it all started on OkCupid.”"
					persons="KYLE AND ASHLEY"
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default Carousel;
