import NewMovieCard from "./NewMovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import "./styles/newMovies.css";

SwiperCore.use(Navigation);

const NewMovies = () => {
  const movieList = [
    {
      id: 1,
      title: `Indiana Jones und das Rad des Schicksals`,
      publicationDate: `29.06.2023`,
      genre: `Action, Abenteuer`,
      image: new URL(
        `https://lumiere-a.akamaihd.net/v1/images/image_f4e79ff0.jpeg`
      ),
    },
    {
      id: 2,
      title: `Elemental`,
      publicationDate: `22.06.2023`,
      genre: `Animation, Comedy, Fantasy, Familie & Kinder`,
      image: new URL(
        `https://lumiere-a.akamaihd.net/v1/images/image_cd2685df.jpeg`
      ),
    },
    {
      id: 3,
      title: `Guardians of the Galaxy: Volume 3`,
      publicationDate: `03.05.2023`,
      genre: `Abenteuer & Action, Comedy, Science Fiction`,
      image: new URL(
        `https://lumiere-a.akamaihd.net/v1/images/image_2f0653a7.jpeg`
      ),
    },
  ];

  // If there are no slides to display, then do not render the component
  if (!Array.isArray(movieList) || !movieList.length) {
    return null;
  }

  return (
    <div id="sectionNew" className="carousel">
      <h2 id="newMovies">New Movies</h2>
      <Swiper
        // spaceBetween={1}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {movieList.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <NewMovieCard
                title={movie.title}
                publicationDate={movie.publicationDate}
                genre={movie.genre}
                image={movie.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default NewMovies;
