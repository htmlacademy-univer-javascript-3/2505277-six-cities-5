import { ReviewsItem } from '../reviews-item/reviews-item';
import { OfferProps } from '../../pages/offer/offer';

type ReviewsListProps = {
  reviews: OfferProps[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem key={review.rating} review={review} />
      ))}
    </ul>
  );
}
export { ReviewsList };
