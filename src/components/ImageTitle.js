import React from "react";
import CarouselContext from "./CarouselContext";

class ImageTitle extends React.Component {
  render() {
    return (
      <CarouselContext.Consumer>
        {value => <h3>{value.image.title}</h3>}
      </CarouselContext.Consumer>
    );
  }
}

export default ImageTitle;
