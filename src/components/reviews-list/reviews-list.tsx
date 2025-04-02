import { ReviewsItem } from '../reviews-item/reviews-item';
import { ReviewItem } from '../../types/offers';

type ReviewsListProps = {
  reviews: ReviewItem[];
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
