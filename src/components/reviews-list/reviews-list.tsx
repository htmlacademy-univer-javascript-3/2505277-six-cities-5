import { ReviewsItem } from '../reviews-item/reviews-item';

type ReviewsProps = {
  rating: number;
  text: string;
  date: string;
  id: string;
  name:string;
};

type ReviewsListProps = {
  reviews: ReviewsProps[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
}
export { ReviewsList };
