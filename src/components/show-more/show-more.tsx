type FilmsProps = {
  setMaxFilmsToRender: any,
}

function ShowMore({ setMaxFilmsToRender }: FilmsProps) {
  // const SHOW_MORE_FILMS_MAX = 8;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => setMaxFilmsToRender((prevState: number) => (prevState + 8))}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMore;
