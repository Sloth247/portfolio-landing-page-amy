import React from 'react';
import Graphic from '../assets/pattern-graphic-design.svg';
import Ui from '../assets/pattern-ui-ux.svg';
import Apps from '../assets/pattern-apps.svg';
import Illustrations from '../assets/pattern-illustrations.svg';
import Photography from '../assets/pattern-photography.svg';
import Motion from '../assets/pattern-motion-graphics.svg';

export default function Menu() {
  return (
    <nav className="menu-container">
      <ul className="menu">
        <li className="menu__item">
          <a href="#" className="menu__link">
            <img
              src={Graphic}
              alt=""
              aria-hidden="true"
              className="menu__item-img"
            />
            <span>Graphic Design</span>
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            <img
              src={Ui}
              alt=""
              aria-hidden="true"
              className="menu__item-img"
            />
            <span>UI/UX</span>
          </a>
        </li>
        <li className="menu__item">
          <a href="" className="menu__link">
            <img
              src={Apps}
              alt=""
              aria-hidden="true"
              className="menu__item-img"
            />
            <span>Apps</span>
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            <img
              src={Illustrations}
              alt=""
              aria-hidden="true"
              className="menu__item-img"
            />
            <span>Illustrations</span>
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            <img
              src={Photography}
              alt=""
              aria-hidden="true"
              className="menu__item-img"
            />
            <span>Photography</span>
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            <img
              src={Motion}
              alt=""
              aria-hidden="true"
              className="menu__item-img"
            />
            <span>Motion Graphics</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
