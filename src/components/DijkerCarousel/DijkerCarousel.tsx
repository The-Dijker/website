"use client";

import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

export function DijkerCarousel() {
  return (
    <div style={{ display: "flex" }}>
      <Carousel
        height="100%"
        style={{ flex: 1 }}
        slideSize="100%"
        slideGap="sm"
        controlsOffset="xs"
        controlSize={32}
        loop
      >
        {[...Array(3)].map((_, i) => (
          <Carousel.Slide className={"h-full w-full"} key={i}>
            <Image src={`/carousel${i + 1}.webp`} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
