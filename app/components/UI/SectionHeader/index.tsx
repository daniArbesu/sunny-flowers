import { syncopate } from '@/app/utils/fonts';
import styles from './styles.module.css';

interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => {
  return <h2 className={`${styles.header} ${syncopate.className}`}>{title}</h2>;
};

export default SectionHeader;
