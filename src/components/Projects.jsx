import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-fontbianco" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            slidesPerView={1}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-full drop-shadow-primary"
          >
            {Projects.project_content.reduce((acc, content, i) => {
              if (i % 3 === 0) acc.push([]);
              acc[acc.length - 1].push(content);
              return acc;
            }, []).map((group, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  {group.map((content, i) => (
                    <div
                      key={i}
                      className="bg-white shadow-md rounded-lg p-2 flex flex-col items-center max-w-[35rem]" // Cambia max-w per ridurre la larghezza
                    >
                      <a href={content.link} target="_blank" rel="noopener noreferrer">
                        <div className="cursor-pointer w-full">
                          <img
                            src={content.image}
                            alt={`${content.title} image`}
                            className="rounded-lg mb-4 w-full max-h-40 object-cover"
                          />
                          <h5 className="font-bold font-Poppins text-center text-lg">
                            {content.title}
                          </h5>
                          <p className="text-sm text-gray-600 mt-2 text-center">
                            {content.description}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
