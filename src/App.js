import React from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Image from "./components/Image";
import CarouselButton from "./components/CarouselButton";

const images = [
  {
    id: 1,
    title: "Grey Cat",
    url:
      "https://loremflickr.com/cache/resized/65535_48246966371_bf15da49ac_c_640_360_nofilter.jpg"
  },
  { id: 2, title: "Fill Murray", url: "https://www.fillmurray.com/640/360" },
  { id: 3, title: "Dummy Image", url: "https://dummyimage.com/640x360/fff/aaa" }
];

function App() {
  return (
    <div className="App">
      <Carousel startimage={images[0]} data={images}>
        <Image></Image>
        <CarouselButton text="<-" action="previous"></CarouselButton>
        <CarouselButton text="->" action="next"></CarouselButton>
      </Carousel>
    </div>
  );
}

export default App;
