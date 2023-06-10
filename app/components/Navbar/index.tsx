import styles from './styles.module.css';
import { syncopate } from '../../utils/fonts';

const Navbar = () => {
  return (
    <header className={`${styles.header} ${syncopate.className}`}>
      <div>Menu</div>
      <div>Sunny Flowers</div>
      <div>Cart</div>
    </header>
  );
};

export default Navbar;
