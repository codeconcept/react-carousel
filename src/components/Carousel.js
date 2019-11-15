import React from "react";
import CarouselContext from "./CarouselContext";

class Carousel extends React.Component {
  state = { currentImage: this.props.startimage, images: this.props.data };

  setNextImage = () => {
    let nextImageId = this.state.currentImage.id + 1;
    if (nextImageId > this.state.images.length) {
      nextImageId = 1;
    }
    this.setState({ currentImage: this.state.images[nextImageId - 1] });
  };

  setPreviousImage = () => {
    let previousImageId = this.state.currentImage.id - 1;
    if (previousImageId === 0) {
      previousImageId = this.state.images.length;
    }
    this.setState({
      currentImage: this.state.images[previousImageId - 1]
    });
  };

  render() {
    return (
      <CarouselContext.Provider
        value={{
          image: this.state.currentImage,
          setNextImage: this.setNextImage,
          setPreviousImage: this.setPreviousImage
        }}
      >
        {this.props.children}
      </CarouselContext.Provider>
    );
  }
}

export default Carousel;
