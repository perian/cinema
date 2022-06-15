import { CommentsGet } from '../../types/comment';
import Review from './review';

type ReviewsProps = {
  comments: CommentsGet
}

const spliceComments = (array: CommentsGet) => {
  const spliceCommentsIndex = Math.ceil(array.length / 2);
  const firstColumnOfComments = [...array].slice(0, spliceCommentsIndex);
  const secondColumnOfComments = [...array].slice(spliceCommentsIndex, array.length);

  return [firstColumnOfComments, secondColumnOfComments];
};

function Reviews({ comments }: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      {spliceComments(comments).map((commentsColumn, index) => {
        const columnIndex = index;

        return (
          <div className="film-card__reviews-col" key={Math.random() + columnIndex}>
            {commentsColumn.map((comment) => <Review key={comment.id} comment={comment} />)}
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
