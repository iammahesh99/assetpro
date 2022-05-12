import * as React from "react";

import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CustomCarousel = ({ images, height }) => {
  return (
    <Box>
      <Carousel
        showThumbs={false}
        dynamicHeigh={false}
        showArrows={false}
        showStatus={false}
        // autoPlay
        // infiniteLoop
      >
        {images.map((image) => (
          <img
            src={image.imgPath}
            style={{ objectFit: "cover", height: height }}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default CustomCarousel;
