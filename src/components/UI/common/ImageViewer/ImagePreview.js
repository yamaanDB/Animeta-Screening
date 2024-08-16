import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./imageviewer.scss";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImagePreview = ({
    data, initSlide = 0, setCurrentSlideIndex
}) => {

    console.log(data, "imagepreData");
    return (
        <div className="preview-section">
            <Swiper
                navigation={true} pagination={true} modules={[Navigation]} className="mySwiper"
                initialSlide={initSlide}
                onSlideChange={({activeIndex}) => setCurrentSlideIndex(activeIndex)}
            >
                {data?.length === 0 && <div className="d-flx justify-content-center align-items-center">Preview not available</div>}
                {data?.length > 0 &&
                    data?.map((uri, index) => {
                        return (
                            <SwiperSlide>
                                <img
                                    src={
                                        uri.url ? `https://images.weserv.nl?url=${uri.url}` : uri
                                    }
                                    style={{ objectFit: "fill", height: "400px", width: "100%" }}
                                    alt="Img"
                                />

                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    );
};

export default ImagePreview;
