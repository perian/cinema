import moment from 'moment';
import { CommentGet } from '../../types/comment';

type ReviewsProps = {
  comment: CommentGet
}

function Review({ comment }: ReviewsProps): JSX.Element {
  const { id, comment: commentText, user, date, rating } = comment;
  const formattedDate = moment(date).format('MMMM D, YYYY');

  return (
    <div className="review">
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
}

export default Review;
