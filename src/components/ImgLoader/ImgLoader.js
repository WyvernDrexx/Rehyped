import React from "react";
import { Spinner } from "react-bootstrap";

class ImageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isImageLoaded: false, isVisible: false };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    const img = this.imageRef.current;
    if (img && img.complete) {
      this.imageLoaded();
    }
  }

  imageLoaded = _ => {
    this.setState({ isImageLoaded: true, isVisible: true });
  };

  render() {
    const { src, alt, className, variant } = this.props;
    return (
      <>
        {this.state.isImageLoaded ? null : (
          <div className={`spin flex-center ${className?className:""}`}>
            <Spinner variant="danger" animation={`${variant?variant:"border"}`} />
          </div>
        )}
        <img
          ref={this.imageRef}
          className={`${this.state.isVisible ? "" : " d-none "}`}
          onLoad={this.imageLoaded}
          src={src}
          alt={alt}
        />
      </>
    );
  }
}

export default ImageLoader;
