import { Link } from 'react-router-dom';
import { OfferData } from '../../types/offers';
import { getRandomNum } from '../../utils/common';
import { AppRoute } from '../../const';

type CardProps = {
  offer: OfferData;
  onMouseLeave?: (value: string) => void;
  onMouseEnter?: (value: string) => void;
};
function Card({ offer, onMouseEnter, onMouseLeave }: CardProps): JSX.Element {
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => {
        onMouseEnter?.(offer.id);
      }}
      onMouseLeave={() => {
        onMouseLeave?.(offer.id);
      }}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="offer/:id">
          <img
            className="place-card__image"
            src={`img/${
              offer.type === 'apartment'
                ? `${offer.type}-0${getRandomNum(1, 3)}`
                : `${offer.type}`
            }.jpg`}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button${
              offer.isFavorite ? ' place-card__bookmark-button--active' : ''
            } button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
export { Card };
