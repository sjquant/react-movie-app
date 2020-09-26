import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: false,
    movies: [],
    page: 1,
  };
  getMovies = async () => {
    const { page } = this.state;
    this.setState({ isLoading: true });
    let {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json", {
      params: {
        sort_by: "rating",
        page: page,
      },
    });
    this.setState((state) => {
      movies = [...state.movies, ...movies];
      return { movies, page: state.page + 1, isLoading: false };
    });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading && (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        )}
        <InfiniteScroll
          className="movies"
          dataLength={movies.length}
          next={this.getMovies}
          hasMore={true}
        >
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </InfiniteScroll>
      </section>
    );
  }
}

export default Home;
