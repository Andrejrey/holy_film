import "./styles/newMovieCard.css";
// Import components
import NewMovieCard from "./NewMovieCard";

// import function to register Swiper custom elements
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css/navigation";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const NewMoviesSlider = ({ movies, getDataForMovieDetails }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={3}
      grabCursor={true}
      scrollbar={{ draggable: true }}
      autoplay={{
        pauseOnMouseEnter: true,
        delay: 3300,
        disableOnInteraction: false,
      }}
    >
      {movies &&
        movies.map((m) => {
          return (
            <SwiperSlide
              key={m.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NewMovieCard
                id={m.id}
                title={m.title}
                publicationDate={m.publicationdate}
                genre={m.category}
                image={m.image}
                rating={m.rating}
                category={m.category}
                description={m.description}
                cinemas={m.cinemas}
                displayShowDetails={true}
                getDataForMovieDetails={getDataForMovieDetails}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default NewMoviesSlider;
