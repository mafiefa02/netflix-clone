// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// import required modules
import { Pagination, Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

{
    /* TODO:
    1. Move pagination bullets to the top of the slider.
    2. Next and previous buttons should only appear when the slider is hovered.
    */
}

interface galleryProps {
    id: string;
    title: string;
    items: {
        key: number;
        title: string;
        image: string;
    }[];
}

function Gallery(props: galleryProps) {
    const next_btn_class = `.next-btn${props.id}`;
    const prev_btn_class = `.prev-btn${props.id}`;

    return (
        <>
            <div className="flex flex-col gap-3 z-0 mb-16">
                <p className="px-[4.4rem] font-bold text-2xl">{props.title}</p>
                <div className="flex flex-row justify-center items-center w-full gap-6">
                    <button className={`w-auto prev-btn${props.id}`}><FontAwesomeIcon icon={faAngleLeft} size="2xl" /></button>
                    <div className="flex flex-row justify-center items-center w-[91%]">
                        <Swiper
                            style={{
                                "--swiper-pagination-bullet-border-radius": "0rem",
                                "--swiper-pagination-bullet-width": "0.8rem",
                                "--swiper-pagination-bullet-height": "0.2rem",
                                "--swiper-pagination-color": "lightgray",
                                "--swiper-pagination-bullet-horizontal-gap": "0.15rem",
                                "--swiper-pagination-right": "0px",
                            } as React.CSSProperties}
                            modules={[Pagination, Navigation]}
                            slidesPerView={6}
                            slidesPerGroupSkip={6}
                            spaceBetween={5}
                            loop={true}
                            pagination={{
                                "clickable": true
                            }}
                            navigation={{
                                "nextEl": next_btn_class,
                                "prevEl": prev_btn_class
                            }}
                            className={`mySlider${props.id}`}
                        >
                            {props.items.map((item) => (
                                <SwiperSlide>
                                    <img className="rounded shadow-2xl" src={item.image} key={item.key} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <button className={`w-auto next-btn${props.id}`}><FontAwesomeIcon icon={faAngleRight} size="2xl" /></button>
                </div>
            </div >
        </>
    )
}

export default Gallery;