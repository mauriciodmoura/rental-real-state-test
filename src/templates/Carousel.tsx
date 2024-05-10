/* eslint-disable import/no-extraneous-dependencies */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { useEffect, useState } from 'react';
import { RiExternalLinkFill } from 'react-icons/ri';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { translate } from '@/utils/Translate';

import flats from '../../assets/flats.json';

type IFlatProps = {
  City: string;
  Title: string;
  Author: string;
  Rooms: number;
  Tags: string[];
  Price: number;
};

const Carousel = () => {
  const [currentCity, setCurrentCity] = useState('Belo Horizonte');
  const [filteredFlats, setFilteredFlats] = useState<IFlatProps[]>([]);
  const cities = Array.from(new Set(flats.map((flat) => flat.City)));

  useEffect(() => {
    setFilteredFlats(flats.filter((flat) => flat.City === currentCity));
  }, [currentCity]);

  return (
    <div className="mx-auto mb-10 mt-8 max-w-screen-xl px-4">
      <div className="flex items-center justify-between">
        <h2 className="my-4 text-xl font-bold text-gray-900">
          Novos Anúncios em
          <select
            className="p-1 font-bold text-primary-700"
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </h2>
      </div>
      <div className="mb-4">
        <a
          href="/"
          className="flex items-center text-blue-600 transition duration-300 hover:text-blue-800"
        >
          Ver todos os imóveis
          <RiExternalLinkFill className="ml-1" />
        </a>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1.1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2.1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {filteredFlats.map((flat, index) => (
          <SwiperSlide key={index}>
            <article className="m-4 mb-14 h-auto min-h-[400px] w-64 overflow-hidden rounded-2xl bg-white shadow-lg">
              <div>
                <img
                  className="h-40 w-full object-cover object-center"
                  src={`/assets/images/image0${(index % 3) + 1}.png`}
                  alt={`Imagem do imóvel em ${flat.City}`}
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">
                  {flat.Title}
                </h2>
                <span className="text-sm text-gray-600">{flat.Author}</span>
                <div className="text-gray-800">{flat.Rooms} quartos</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {flat.Tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-2xl bg-gray-200 px-2 py-1 text-xs font-medium text-gray-800"
                    >
                      {translate(tag)}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <span className="text-lg font-bold text-primary-700">
                    R${flat.Price.toLocaleString()}
                  </span>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { Carousel };
