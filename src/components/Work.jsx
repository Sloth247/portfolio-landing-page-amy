import React from 'react';
import './Work.scss';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import '@splidejs/react-splide/css';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

export default function Work() {
  const MainImages = [
    require('../assets/image-slide-1.jpg'),
    require('../assets/image-slide-2.jpg'),
    require('../assets/image-slide-3.jpg'),
    require('../assets/image-slide-4.jpg'),
    require('../assets/image-slide-5.jpg'),
  ];
  const mainOptions = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    padding: { left: '14%', right: '14%' },
    gap: 15,
    autoWidth: false,
    pagination: false,
    isNavigation: true,
  };

  return (
    <section className="work">
      <h2 className="work__title">My Work</h2>
      <Splide options={mainOptions}>
        {MainImages.map((image, index) => (
          <SplideSlide key={index}>
            <img src={image} alt={`work ${index}`} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
