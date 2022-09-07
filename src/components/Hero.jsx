import React from 'react';
import HeroImg from '../assets/image-amy.webp';

import './Hero.scss';

export default function Hero() {
  const link = '#';
  return (
    <section className="hero-container wrapper">
      <div className="hero__img-container">
        <img src={HeroImg} alt="Amy" />
      </div>
      <h2 className="hero__title">
        I&apos;m Amy, and I&apos;d love to work on your next project
      </h2>
      <p className="hero__description">
        I love working with others to create beautiful design solutions.
        I&apos;ve designed everything from brand illustrations to complete
        mobile apps. I&apos;m also handy with a camera!
      </p>
      <a href={link} className="btn hero__btn">
        Free Consultation
      </a>
    </section>
  );
}
