import styled from "styled-components";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import PageHeader from "../../components/PageHeader";
import GenericContent from "../../components/GenericContent";
import PageTitle from "../../components/PageTitle";
import {
  mediaQuery,
  MOBILE
} from "../../constants/breakpoints";

const CarouselContainer = styled.div({
  marginBottom: '2rem',
  padding: '0 2rem 6rem',
  [mediaQuery(`(min-width: ${MOBILE})`)]: {
    padding: '0 6rem 6rem'
  },
});

const Chuck = (props) => {
  const { content, images, title } = props;

  return (
    <>
      <PageTitle tab="Chuck" />
      <PageHeader title={title} />
      <CarouselContainer>
        {/* TODO: This needs work */}
        <AwesomeSlider>
          {images.map((img, index) => <div key={index} data-src={img.source}/>)}
        </AwesomeSlider>
      </CarouselContainer>
      <GenericContent content={content} />
    </>
  );
};

export default Chuck;
