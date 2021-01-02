import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };

  //please wait
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //console.log(movies.data.data.movies);
    this.setState({movies:movies.data.data.movies, isLoading: false});
  }

  componentDidMount() {
    this.getMovies();
  }

  render(){
    const { isLoading } = this.state;

    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {this.state.movies.map(movie => (
              <Movie
                key = {movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
