import React from "react";
import { TReview, Review } from "../../../components/review";
import styles from "./style.module.scss";
import { Carousel, CarouselItem } from "react-beautiful-carousel";
export type ReviewsProps = {
  reviews: TReview[];
};

export function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className={styles.container}>
      <h2>לקוחות מרוצות</h2>
      <div className={styles.reviews}>
        <Carousel showDots>
          {reviews.map((review, idx) => (
            <CarouselItem className={styles.review}>
              <Review key={idx} {...review} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
