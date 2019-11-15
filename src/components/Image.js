import React from "react";
import CarouselContext from "./CarouselContext";

class Image extends React.Component {
  render() {
    return (
      <CarouselContext.Consumer>
        {value => (
          <>
            <img src={value.image.url} alt={value.image.title} />
            <br />
          </>
        )}
      </CarouselContext.Consumer>
    );
  }
}

export default Image;
