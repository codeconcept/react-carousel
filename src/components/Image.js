import React from "react";

class Image extends React.Component {
  render() {
    const { image } = this.props;
    return (
      <>
        <img src={image.url} alt={image.title} />
        <br />
      </>
    );
  }
}

export default Image;
