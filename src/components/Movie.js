import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

class Movie extends React.Component {
  summaryRef = React.createRef();

  state = {
    collapseRequired: false,
  };

  componentDidMount() {
    this.setState({
      collapseRequired: this.summaryRef.current.clientHeight > 140,
    });
  }

  render() {
    const { id, year, title, summary, poster, genres } = this.props;
    const { collapseRequired } = this.state;

    return (
      <div className="movie">
        <Link
          to={{
            pathname: `/movie/${id}`,
            state: {
              year,
              title,
              summary,
              poster,
              genres,
            },
          }}
        >
          <img src={poster} alt={title} title={title}></img>
          <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
              {genres.map((genre, idx) => (
                <li key={idx} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <div className="movie__summary-container">
              <p className="movie__summary" ref={this.summaryRef}>
                {summary}
              </p>
            </div>
            {collapseRequired && <span> ... </span>}
          </div>
        </Link>
      </div>
    );
  }
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
