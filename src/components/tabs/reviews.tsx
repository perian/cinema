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
          const formattedDate = moment(comment.date).format('MMMM D, YYYY');

          return (
            <div className="review" key={comment.id}>
              <blockquote key={comment.id} className="review__quote">
                <p className="review__text">{comment.comment}</p>

                <footer className="review__details">
                  <cite key={comment.user.id} className="review__author">{comment.user.name}</cite>
                  <time className="review__date" dateTime={comment.date}>{formattedDate}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{comment.rating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
