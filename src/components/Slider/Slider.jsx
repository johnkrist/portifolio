import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { projetos } from "../../projetos-morck.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css"
import { CardStyled } from "./style.js";

export function Slider() {
  const settings = {
    spaceBetween: 20,
    slidesPerView: 3,
    navigation: {
      clickable: true,
    },
  };

  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={{ Navigation, Pagination, A11y }}
      {...settings}
    >
      {projetos?.map((projeto) => (
        <SwiperSlide key={projeto.title}>
          <CardStyled>
            <h2>{projeto.title}</h2>
            <div className="content">
              <a className="btnvisit" href={projeto.url}>
                <img src={projeto.image} alt={projeto.title} />
              </a>
            </div>
            <section>
              <p>{projeto.descricao}</p>
            </section>
          </CardStyled>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
