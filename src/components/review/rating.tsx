import React from 'react';

function Rating(): JSX.Element {
  const stars = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  const starsList = stars.map((el) => {
    const id = `star-${el}`;

    return (
      <React.Fragment key={id}>
        <input
          className="rating__input"
          id={id}
          type="radio"
          name="rating"
          value={id}
        />
        <label className="rating__label" htmlFor={id}>
          Rating {el}
        </label>
      </React.Fragment>
    );
  });

  return (
    <div className="rating">
      <div className="rating__stars">
        {starsList}
      </div>
    </div>
  );
}

export default Rating;
