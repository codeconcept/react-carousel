import React from "react";

class Carousel extends React.Component {
  state = { currentImage: this.props.startimage, images: this.props.data };
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        image: this.state.currentImage,
        setNextImage: () => {
          let nextImageId = this.state.currentImage.id + 1;
          if (nextImageId > this.state.images.length) {
            nextImageId = 1;
          }
          this.setState({ currentImage: this.state.images[nextImageId - 1] });
        },
        setPreviousImage: () => {
          let previousImageId = this.state.currentImage.id - 1;
          if (previousImageId === 0) {
            previousImageId = this.state.images.length;
          }
          this.setState({
            currentImage: this.state.images[previousImageId - 1]
          });
        }
      });
    });
    return children;
  }
}

export default Carousel;
