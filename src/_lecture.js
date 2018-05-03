// ### command line
//     * cd  ..
//     * cd my-app
//     * ls
//     * yarn start

// ### VSC
//     * App.js

// ### lecture 4
//     * component
//         [movie_list, movie_card, poster]

// ### lecture 5
//     * jsx
//         : html inside react
//         ex. class -> classname
    * edit 'App.js', 'App,css'
    // * render
    //     : the function showing something
    //         component has different methods, functions
    //         all component should have a render function!
        // ex. in 'index.js'
                ReactDOM.render(<App />, document.getElementById('root'));
            // in 'public/index.html' 
                <div id='root'></div>
            // in 'App.js'
                class App extends Component {
                    render() {
                        return (
                        <div className="App">
                        
                        </div>
                        );
                    }
                }
            // means, ReactDOM renders one component called 'App' inside of document which has element with the Id 'root'.

    * created 'Movie.js', 'Movie.css'
        // in 'Movie.js'
            import React, { Component } from 'react';
            import './Movie.css';

            class Movie extends Component{
                render(){
                    return(
                        <h1>hello this is a movie</h1>
                    )
                }
            }

            export default Movie;
        
        // in 'App.js'
            import Movie from './Movie';
import { resolveComponents } from 'uri-js';
import { Z_FINISH } from 'zlib';

            // <div className="App">
              <Movie />
            // </div>

    // * process to build Component
    //           1. create Component
    //           2. import React
    //           3. create class 'Component name' extends component
    //           2. they have to render a function, and return it, have html (jsx)

// ### lecture 6
//   * two concepts in React: state & props
    * props 
        // : the way father component give children component information
        // data flow with props (why data? because data have to come from somewhere)
        // in the Movie component (father component) have to give information to each Card component(child component)
        // you have one big component and this will have all the data.  

        // ex. in 'App.js'
            const movieTitles = [ "Matrix", "Full Metal Jacket", "Oldboy", "Star Wars"]
            const movieImages = [ "","","","" ] // img adress
            // <div className="App">
            <Movie title={movieTitles[0]} poster={movieImages[0]} />
            <Movie title={movieTitles[1]} poster={movieImages[1]} />
            <Movie title={movieTitles[2]} poster={movieImages[2]} />
            <Movie title={movieTitles[3]} poster={movieImages[3]} />
            // </div>
t

        // in 'Movie.js'
            // class Movie extends Component{
            //     render(){
            //         return(
            //             <div>
                            <MoviePoster poster={this.props.poster} />
                            <h1>{this.props.title}</h1> //in jsx, when you want to execute javascript, use {}
            //             </div>
            //         )
            //     }
            // }
            
            // class MoviePoster extends Component{
            //     render(){
            //         return(
                        <img src={this.props.poster} />
            //         )
            //     }
            // }
                
// ### lecture 7
    // in App.js
    // * create Array
        // replace const movieTitles & movieImages to movies
            const movies = [ {title:"",poster:""},{title:"",poster:""},{title:"",poster:""},{title:"",poster:""} ]
    // * create array.map
        // replace <Movie title={movieTitles[0]} poster={movieImages[]} />
        // to Array.map

        // class App extends Component {
        //     render() {
        //       return (
        //         <div className="App">
                       {movies.map(movie => {
                        return <Movie title={movie.title} poster={movie.poster} />
        //           })}
        //         </div>
    // array has a function called map 
    // map() method creates a new array with the results of calling a provided function on every element in the calling array. 
    // 1. taking 'movies' array and map()ing through it
    // 2. making 'Movie' component for each element inside of 'movies' array
    // 3. function give an one argument 'movie' which is current element in the array
        // it is equivalent with 
            // <Movie title={movies[0].title} poster={movies[0].poster} />

// ### lecture 8
    // * error founded
    // warning: Each child in an array or iterator should have a uniqute key
    // create one more argument in map() and give unique key property to Movie component.
        {movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}

    // * propTypes
        //  in 'Movie.js'
        //  add in class Movie
            static propTypes = {
                title: React.propTypes.string,
                poster: React.propTypes.string
            }

        // and install prop-types
        TERMINAL > yarn add prop-types 

        // import propTypes in 'Movie.js'
        import PropTypes from 'prop-types';
        // and delete React.
            static PropTypes = {
                title: PropTypes.string.isRequired,
                poster: PropTypes.string.isRequired
            }
        // it is good because we can check what we are receiving from the father
        // and also we can check if it is reqired or not 
        // --> so you can be sure if you gonna get data like username and it is string and required.
        // same goes to class MoviePoster 

// ### lecture 9
    * component life cycle
//         Render: componentWillMount() -> render() -> componentDidMount()
//         update: componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> component

//         --> so when you make application, first request data in componentWillMount() to an API. 
//             and then after the component rendered we do something with data in componentDidMount() 

//         --> updating, compare old and new component and if true, notify you component will update and rendered then notify you again updated already. 

//         component has many functions and has specific order. you can not change it. 


// ### lecture 10

//     * State 
//         whenever state changed function inside of component will render again. 

//         ex. in 'App.js'
            // class App extends Component {
                state = {
                    greeting: 'Hello!'
                }

                componentDidMount(){
                    setTimeout(() => {  // function
                        this.setState({ // can't call like this --> {this.state.greeting}
                            greeting: "Hello agina!"
                        })
                    }, 5000) // after 5 sec
                }

                // render() {
                // return (
                //     <div className="App">
                        {this.state.greeting}


// ### lecture 11 : Practicing this.setState

// ex. in 'App.js'

class App extends Component {

    state = {  // create state inside of Component 'App'
        movies = [ // bring array 'movies' into state
            {
                title: "movie_1",
                poster: "#"
            }
        ]
    }

    componentDidMount(){ // add one more movie after some seconds
        setTimeout(() => { // setTimeout (fn, sec) and in modern javascript you can write function like this: ()=>{}
            this.setState({ // --> set the 'state' up there
                movies: [ // --> take the array
                    ...this.state.movies, // --> leave the original array (without this, it will be just replaced)
                    {                     // --> then add this
                        title: "new_movie_1",
                        poster: "#"
                    }//, ...this.state.movies --> it will be added in front of original array
                ]
            })
        }, 1000)
    }
    
    render(){
        return (
            <div className="App">
                {this.state.movies.map((movie, index) => { // change moives to this.state.movies
                    return <Movie title={movie.title} poster={movie.poster} key={index} />
                })}
            </div>
        );
    }    
}

// ### lecture 12 : Loading states 

// component without data -> call the API for the data -> API give you data -> it will update state of your component

// in 'App.js'

// move array 'movies' from state to insided of this.setState. now state is empty.  
// the function '_renderMovies'
// move {this.state.movies.map((movie, index) => {...})} to the new function '_renderMovies'. now inside of <div> is empty. 
// have to const movies = this.state.movies.map.... and then return movies. 
// then inside of the <div> -->  {this.state.movies ?  this._renderMovies() : 'Loading'} means ask if we have movies then call the function _renderMovies, if not, say 'Loading'

// ### lecture 13 : Smart vs Dumb Components 

//     * Smart Component(Class component) has State. and Dumb Component(stateless functional component) doesn't have State only have Props. 
//     ex. in 'Movie.js'
//          import React {Component} from 'react';
            import React from 'react';
            // class Movie extends Component{     // ----> Smart Component
                
            //  static propTypes = {
            //    title: PropTypes.string.isRequired,
            //    poster: PropTypes.string.isRequired
            //   }
                    
            //     render(){
            //         return(
            //             <div>
            //                 <MoviePoster poster={this.props.poster} />
            //                 <h1>{this.props.title}</h1>
            //             </div>
            //         )
            //     }
            // }
            function Movie({title, poster}){     // ----> stateless functional component. only has props {poster}. it is not a class anymore. 
                return (
                    <div>
                        <MoviePoster poster={poster} />
                        <h1>{title}</h1>
                    </div>
                )
            }
    //         class MoviePoster extends Component{           ----> Smart Component
            
    //             static propTypes = {
    //                 poster: PropTypes.string.isRequired
    //             }
                   
    //             render(){
    //                 return(
    //                     <img src={this.props.poster} alt="Movie Poster" />
    //                 )
    //             }
    //         }
                    
              function MoviePoster({poster}){        // ----> stateless functional component. only has props {poster}. it is not a class anymore. 
                  return (
                      <img src={poster} alt="Movie Poster" />  // not this.props.poster
                        )
                    }

### lecture 14 : AJAX on React

    * AJAX stands for Asynchronous JavaScript and XML. In a nutshell, it is the use of the XMLHttpRequest object
        to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files . 
    * JSON is Javascript Object Notation. the way of writing object in javascript. 
    * fetch request for url
    * method get 
    * using 'yts.ag/api' --> 'https://yts.am/api/v2/list_movies.json?sort_by=download_count'
            you can change the part after json with ?sort_by=... 
    
    * asynchronous -> no need to refresh to get data. -> promises 

### lecture 15 : Promises

    ex. in 'App.js' inside of componentDidMount(){}
    console.log(fetch('movie_api'))
    console.log('hello')
    -> it will not wait for first one to finish. 
    -> promises give two cases which promise is fulfilled or not fulfilled

    ex. in 'App.js'
    class App extends Component {

        state = {
        }
      
        componentDidMount(){
          fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
          .then(response => console.log(response))
          .catch(err => console.log(err))
        }

    we can see the data in console 

    ex. in 'App.js'
    class App extends Component {

        state = {
        }
      
        componentDidMount(){
          fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
          .then(potato => potato.json())
          .then(json => console.log(json))
          .catch(err => console.log(err))
        }

### lecture 16 : Async await

    componentDidMount(){
        this._getMovies();
    }

    _getMovies = async () => {
        const movies = await this._callApi(); // 
        this.setState({
          movies
        });
      };


    _callApi = () => {
        return fetch(
        'https://yts.am/api/v2/list_movies.json?sort_by=download_count'
        )
        .then(response => response.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err));
    };

### lecture 17 : Updating Movie Component

more props in App.js and register them in Movie.js 


