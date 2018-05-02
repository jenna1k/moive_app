import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';





class App extends Component {

  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [ 
          {
            title: "Fight Club",
            poster: "https://i.pinimg.com/736x/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02--classic-poster-classic-movies-posters.jpg"
          },
          {
            title: "Dunkirk",
            poster: "http://2.citynews.stgy.ovh/~shared/images/cinema/locandine/dunkirk-gzsm.jpg"
          },
          {
            title: "Baby Driver",
            poster: "http://getthechance.wales/wp-content/uploads/2017/06/BD_INTL_FNL_QUAD-Large_1000x750p_thumbnail-1.jpg"
          },
          {
            title: "Perfume",
            poster: "http://smashinghub.com/wp-content/uploads/2012/06/Use-AIDA-Formula.jpg"
          } 
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ?  this._renderMovies() : 'Loading??'}
      </div>
    );
  }
}

export default App;
