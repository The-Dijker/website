"use client";

import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import NextImage from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function DijkerCarousel() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const images = [
    {
      src: "/carousel1.webp",
      alt: "Dijker",
    },
    {
      src: "/carousel2.webp",
      alt: "Dijker Internals",
    },
    {
      src: "/carousel3.webp",
      alt: "Dijker with rider",
    },
  ];

  return (
    <div className={"flex"}>
      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        className={"grow"}
        slideSize={{
          base: "100%",
          sm: "100%",
          md: "90%",
          lg: "80%",
          xl: "60%",
        }}
        slideGap="sm"
        controlsOffset="xs"
        controlSize={32}
        loop
      >
        {images.map((image) => (
          <Carousel.Slide key={image.src}>
            <Image
              component={NextImage}
              width={400}
              height={300}
              src={image.src}
              alt={image.alt}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
