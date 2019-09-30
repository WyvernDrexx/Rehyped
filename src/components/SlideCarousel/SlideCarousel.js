import React from "react"
import ReactDOM from 'react-dom';

import styled from "styled-components";
import {
  CarouselProvider as _CarouselProvider,
  Slide,
  Slider,
  Dot,
  Image as CarouselImage
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import PropTypes from "prop-types";
import './SlideCarousel.scss'

const Image = styled(CarouselImage)`
  object-fit: cover;
`;

class Carousel extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  };
  constructor() {
    super();
    this.containerRef = React.createRef();
    this.state = {
      wrapperHeight: 0,
      wrapperWidth: 0
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions = _ => {
    console.log(this.containerRef)
    if (!this.containerRef) return;
    const containerNode = this.containerRef.current;

    this.setState({
      heightProportion: containerNode.clientHeight,
      widthProportion: containerNode.clientWidth
    });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { images, ...other } = this.props;

    // carousel is square on vertical small screens and 16:9 on horizontal small screens
    return ReactDOM.createPortal(
      <CarouselProvider
        naturalSlideWidth={this.state.widthProportion}
        naturalSlideHeight={this.state.heightProportion}
        totalSlides={images.length}
      >
        <Wrapper innerRef={this.containerRef} {...other}>
          <Slider {...other}>
            {images.map((src, index) => (
              <Slide index={index} key={src}>
                <Image src={src} id="Image" />
              </Slide>
            ))}
          </Slider>
        </Wrapper>
        <DotsWrapper>
          {images.map((_, index) => (
            <Dot slide={index} key={index}>
              o
            </Dot>
          ))}
        </DotsWrapper>
      </CarouselProvider>,
      document.getElementById("slide-carousel")
    )
  }
}

export default Carousel;

const CarouselProvider = styled(_CarouselProvider)`
  position: relative;
  height: 100vh;
`;

const DotsWrapper = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 80vh;

  .carousel__dot {
    font-size: 3rem;
    color: green;
  }

  .carousel__dot--selected {
    color: red;
  }
`;

const Wrapper = styled.div`
  // position: absolute;
  // left: 0;
  // width: 100vw;
  height: 100%;
`;

