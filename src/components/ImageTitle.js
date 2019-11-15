import React from "react";

class ImageTitle extends React.Component {
  render() {
    return <h3>{this.props.image.title}</h3>;
  }
}

export default ImageTitle;
