import { monthNames } from '../../const/date';

type ReviewsProps = {
  rating: number;
  text: string;
  date: string;
  id: string;
  name: string;
};

type ReviewsItemProps = {
  review: ReviewsProps;
};

function ReviewsItem({ review }: ReviewsItemProps): JSX.Element {
  const reviewByMonth = new Date(review.date).getMonth();
  const reviewByYear = new Date(review.date).getFullYear().toString().slice(2);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={`img/avatar-${
              review.name.length > 4 ? 'max' : 'angelina'
            }.jpg`}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${(review.rating / 5) * 100}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.text}</p>
        <time className="reviews__time" dateTime={review.date}>
          {`${monthNames[reviewByMonth]} ${reviewByYear}`}
        </time>
      </div>
    </li>
  );
}

export { ReviewsItem };
