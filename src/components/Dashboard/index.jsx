import video01 from "../../assets/videos/video02.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dashboard from "../../assets/images/dashboard1.png";
import dashboard4 from "../../assets/images/dashboard4.png";
const Dashboard = () => {
  return (
    <header className="slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "progressbar",
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="swiper-container"
        onSlideChange={(swiper) => {
          // Update preview titles
          const nextSlideIndex =
            swiper.realIndex === 2 ? 0 : swiper.realIndex + 1;
          const prevSlideIndex =
            swiper.realIndex === 0 ? 2 : swiper.realIndex - 1;

          const titles = ["DISCOVER", "EXCLUSION", "EDITORIAL"];

          document.querySelector(".slide-preview-next").textContent =
            titles[nextSlideIndex];
          document.querySelector(".slide-preview-prev").textContent =
            titles[prevSlideIndex];
        }}
      >
        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: `url(${dashboard})`,
            }}
          >
            <div className="slide-content">
              <span className="title">Thinking</span>
              <h2 className="subtitle">
                Innovative tech minds drive better scalable solutions
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <video src={video01} muted autoPlay loop />
            <div className="slide-content">
              <span className="title">Building</span>
              <h2 className="subtitle">
                Creating impactful systems with vision and purpose
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{ backgroundImage: `url(${dashboard4})` }}
          >
            <div className="slide-content">
              <span className="title">Empowering</span>
              <h2 className="subtitle">
                Enabling growth through smart technology
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Preview elements for next/prev slide titles */}
      <div className="slide-preview-prev">Thinking</div>
      <div className="slide-preview-next">Empowering</div>

      <div className="swiper-button-prev">PREV</div>
      <div className="swiper-button-next">NEXT</div>
    </header>
  );
};

export default Dashboard;
