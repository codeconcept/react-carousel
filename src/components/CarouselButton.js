import React from "react";
import CarouselContext from "./CarouselContext";

class CarouselButton extends React.Component {
  render() {
    return (
      <CarouselContext.Consumer>
        {value => (
          <button
            onClick={
              value.action === "next"
                ? value.setNextImage
                : value.setPreviousImage
            }
          >
            {this.props.text}
          </button>
        )}
      </CarouselContext.Consumer>
    );
  }
}

export default CarouselButton;
