import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {filmInfo, onTitleClick, onCardHover, onCardUnhover} = this.props;
    const {title, picture, id} = filmInfo;
    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          onCardHover(id);
        }}

        onMouseOut={() => {
          onCardUnhover();
        }}
      >
        <div className="small-movie-card__image"
          onClick = {() => {
            onTitleClick(id);
          }}
        >
          <img
            src={`img/${picture}`}
            alt={title}
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-movie-card__title">
          <a
            onClick = {(evt) => {
              evt.preventDefault();
              onTitleClick(id);
            }}
            className="small-movie-card__link"
            href="movie-page.html">{title}
          </a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  filmInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  onTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardUnhover: PropTypes.func.isRequired,
};

export default FilmCard;
