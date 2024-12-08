"use client";

import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

export function DijkerCarousel() {
  return (
    <div className={"flex"}>
      <Carousel
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
        {[...Array(3)].map((_, i) => (
          <Carousel.Slide className={"w-fit"} key={i}>
            <Image src={`/carousel${i + 1}.webp`} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
