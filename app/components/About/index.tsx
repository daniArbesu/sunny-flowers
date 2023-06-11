import SectionHeader from '../UI/SectionHeader';
import styles from './styles.module.css';

const About = () => {
  return (
    <section className={styles.section} data-scroll-section>
      <SectionHeader title="about" />
      <p>
        Sunny Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Sunny Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </section>
  );
};

export default About;
