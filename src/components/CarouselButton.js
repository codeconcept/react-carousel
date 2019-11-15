import React from "react";

class CarouselButton extends React.Component {
  render() {
    const handleClick =
      this.props.action === "next"
        ? this.props.setNextImage
        : this.props.setPreviousImage;
    return <button onClick={handleClick}>{this.props.text}</button>;
  }
}

export default CarouselButton;
