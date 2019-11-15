import React from "react";

class Image extends React.Component {
  render() {
    const { image } = this.props;
    return (
      <>
        <h3>{image.title}</h3>
        <img src={image.url} alt={image.title} />
        <br />
      </>
    );
  }
}

export default Image;
