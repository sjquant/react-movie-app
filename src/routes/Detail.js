import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (!location.state) return null;

    const { year, title, summary, poster, genres } = location.state;

    return (
      <div className="movie-detail__container">
        <div className="movie-detail">
          <img src={poster} alt={title}></img>
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
          </div>
        </div>
      </div>
    );
  }
}
export default Detail;
