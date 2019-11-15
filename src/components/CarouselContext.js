import { createContext } from "react";

const CarouselContext = createContext({
  image: null,
  setNextImage: () => {},
  setPreviousImage: () => {}
});
export default CarouselContext;
