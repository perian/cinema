import moment from 'moment';
import { CommentsGet } from '../../types/comment';

type ReviewsProps = {
  comments: CommentsGet
}

function Reviews({ comments }: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment) => {
          const { id, comment: commentText, user, date, rating } = comment;
          const formattedDate = moment(date).format('MMMM D, YYYY');

          return (
            <div className="review" key={id}>
              <blockquote key={id} className="review__quote">
                <p className="review__text">{commentText}</p>

                <footer className="review__details">
                  <cite key={user.id} className="review__author">{user.name}</cite>
                  <time className="review__date" dateTime={date}>{formattedDate}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{rating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
