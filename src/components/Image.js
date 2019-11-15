import React from "react";
import CarouselContext from "./CarouselContext";

class Image extends React.Component {
  render() {
    return (
      <CarouselContext.Consumer>
        {value => (
          <>
            <img
              style={
                value.isLoading
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
              src={value.image.url}
              alt={value.image.title}
              onLoad={() => value.setImageLoading(false)}
            />
            <br />
          </>
        )}
      </CarouselContext.Consumer>
    );
  }
}

export default Image;
