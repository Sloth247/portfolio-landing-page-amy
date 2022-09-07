import Logo from '../assets/logo.svg';

export default function Navbar() {
  const link = '#';
  const consultaiton = '#';
  return (
    <nav className="nav">
      <a href={link} className="nav__logo-container">
        <img src={Logo} alt="logo" />
      </a>
      <a href={consultaiton} className="btn nav__btn">
        Free Consultation
      </a>
    </nav>
  );
}
