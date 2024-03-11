import styles from './Header.module.scss';

import Logo from "../logo/Logo"
import Navigation from '../nav/Navigation';
import Socials from '../socials/Socials';
import BurgerMenu from '../burger/BurgerMenu';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <div className={styles.content_box}>
            <Navigation />
            <Socials />
          </div>
          <BurgerMenu />
        </div>
      </div>
    </header>
  )
}