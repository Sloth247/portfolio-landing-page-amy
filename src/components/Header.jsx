import Menu from './Menu';
import Navbar from './Navbar';

import './Header.scss';

export default function Header() {
  return (
    <header className="header wrapper">
      <Navbar />
      <div className="header__title-container">
        <h1 className="header__title">Design solutions made easy</h1>
        <p className="header__description">
          With over ten years of experience in various design disciplines,
          I&apos;m your one-stop shop for your design needs.
        </p>
      </div>
      <Menu />
    </header>
  );
}
