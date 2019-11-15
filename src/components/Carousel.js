import React from "react";
import CarouselContext from "./CarouselContext";

class Carousel extends React.Component {
  state = {
    currentImage: this.props.startimage,
    images: this.props.data,
    isLoading: true
  };

  setNextImage = () => {
    this.setImageLoading(true);

    let nextImageId = this.state.currentImage.id + 1;
    if (nextImageId > this.state.images.length) {
      nextImageId = 1;
    }

    this.setState({
      currentImage: this.state.images[nextImageId - 1]
    });
  };

  setPreviousImage = () => {
    this.setImageLoading(true);

    let previousImageId = this.state.currentImage.id - 1;
    if (previousImageId === 0) {
      previousImageId = this.state.images.length;
    }

    this.setState({
      currentImage: this.state.images[previousImageId - 1]
    });
  };

  setImageLoading = loading => {
    this.setState({ isLoading: loading });
  };

  render() {
    return (
      <CarouselContext.Provider
        value={{
          image: this.state.currentImage,
          setNextImage: this.setNextImage,
          setPreviousImage: this.setPreviousImage,
          isLoading: this.state.isLoading,
          setImageLoading: loading => this.setImageLoading(loading)
        }}
      >
        {this.props.children}
      </CarouselContext.Provider>
    );
  }
}

export default Carousel;
