import { photos } from '../../utils/images';
import { ColumnLayout, FeaturedSection, RowLayout } from './styles';

const Featured = () => {
  const [firstUrl, secondUrl] = photos;
  return (
    <FeaturedSection data-scroll-section>
      <RowLayout>
        <h3>green</h3>
        <img src={firstUrl} alt="" data-scroll />
      </RowLayout>
      <ColumnLayout>
        <h3>lilly</h3>
        <img src={secondUrl} alt="" data-scroll />
      </ColumnLayout>
    </FeaturedSection>
  );
};

export default Featured;
