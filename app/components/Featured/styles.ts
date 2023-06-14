import { styled } from 'styled-components';

export const FeaturedSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;

  img {
    clip-path: inset(100% 0% 0% 0%);
    transition: clip-path 1s cubic-bezier(0.77, 0, 0.175, 1);
  }

  .is-reveal {
    clip-path: inset(0% 0% 0% 0%);
  }

  h3 {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const RowLayout = styled.div`
  display: grid;
  gap: 10px;
  grid-template-rows: repeat(2, auto);

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ColumnLayout = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 100px auto;
  align-items: flex-end;

  img {
    width: 100%;
    height: 125vh;
    object-fit: cover;
  }

  h3 {
    transform: translateX(100%) rotate(-90deg);
    transform-origin: left bottom;
    justify-self: self-end;
  }
`;
