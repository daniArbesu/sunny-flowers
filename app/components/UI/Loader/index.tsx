import { bai_jamjuree, bodoni_moda } from '@/app/utils/fonts';
import styles from './styles.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <h1 className={bai_jamjuree.className}>Sunny Flowers</h1>
      <h2 className={bodoni_moda.className}>Valencia, Spain</h2>
    </div>
  );
};

export default Loader;
