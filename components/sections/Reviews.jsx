import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
} from "../ui/carousel";
import ReviewCard from "../ReviewCard";
import { testimonials } from "@/app/utils/dummyData";

const Reviews = () => {
  return (
    <section className="paddings py-10">
      <Carousel
        opts={{ loop: true, auto: true, autoSpeed: 4000 , align: "start",}}
        className={"items-center justify-center flex"}
      >
        <CarouselContent>
          {testimonials.map((review, i) => (
            <CarouselItem key={i} className={"sm:basis-1/2 md:basis-1/3"}>
              <ReviewCard {...review} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselIndicators />
      </Carousel>
    </section>
  );
};

export default Reviews;
