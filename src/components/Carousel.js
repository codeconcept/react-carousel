import React from "react";

class Carousel extends React.Component {
  state = { currentImage: this.props.startimage };
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        image: this.state.currentImage
      });
    });
    return children;
  }
}

export default Carousel;
