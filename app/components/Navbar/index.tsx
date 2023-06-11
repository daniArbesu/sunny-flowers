import styles from './styles.module.css';
import { syncopate } from '../../utils/fonts';

const Navbar = () => {
  return (
    <header
      className={`${styles.header} ${syncopate.className}`}
      data-scroll-section
    >
      <div>Menu</div>
      <div>Sunny Flowers</div>
      <div>Cart</div>
    </header>
  );
};

export default Navbar;
