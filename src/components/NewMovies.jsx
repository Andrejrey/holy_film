// Import components
import NewMovieCard from "./NewMovieCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import styles
import "./styles/newMovies.css";

SwiperCore.use(Navigation);

const NewMovies = ({ data }) => {
  return (
    <div id="sectionNew" className="carousel">
      <h2 id="newMovies">New Movies</h2>
      <Swiper
        // cssMode={true}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={data.length}
        className="mySwiper"
      >
        {data.map((d) => {
          return (
            <SwiperSlide key={d.sys.id}>
              <NewMovieCard
                title={d.fields.title}
                publicationDate={d.fields.publicationDate}
                genre={d.fields.genre}
                image={d.fields.image.fields.file.url}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default NewMovies;
