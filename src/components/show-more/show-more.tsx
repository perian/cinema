import { FILM_CARDS_AMOUNT_TO_RENDER } from '../../const';

type FilmsProps = {
  setMaxFilmCardsToRender: any,
}

function ShowMore({ setMaxFilmCardsToRender }: FilmsProps) {

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => setMaxFilmCardsToRender((prevState: number) => (prevState += FILM_CARDS_AMOUNT_TO_RENDER))}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMore;
