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
      console.log("loaded");
      this.imageLoaded();
    }
  }

  imageLoaded = _ => {
    this.setState({ isImageLoaded: true, isVisible: true });
    console.log(this.imageRef.current.complete);
  };

  render() {
    const { src, alt } = this.props;
    return (
      <>
        {this.state.isImageLoaded ? null : (
          <div className="spin flex-center">
            <Spinner variant="danger" animation="grow" />
          </div>
        )}
        <img
          ref={this.imageRef}
          className={`${this.state.isVisible ? "" : " visibility-hidden "}`}
          onLoad={this.imageLoaded}
          src={src}
          alt={alt}
        />
      </>
    );
  }
}

export default ImageLoader;
