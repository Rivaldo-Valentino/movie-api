const API_KEY = 'api_key=6e1f953d6b3a459951c6b80a481a0b73';
const BASE_URL = 'http://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const main = document.getElementById('main');

getMovies(API_URL)
function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
       console.log(data.results)
        showMovies(data.results)
    })
}

function showMovies(data){
    main.innerHTML =''
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, release_date} = movie
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie')
        movieEl.innerHTML = ` 
        <img src="${IMG_URL+poster_path}" alt="">

        <div class="movie-info">
          <h5>${title}</h5>
          
          
        </div>
        <p class="text-center">${release_date}</p>
        <p class="text-center fw-bold">${vote_average}</p>
      </div>
            
            
            `
            main.appendChild(movieEl);
          });
        }
        // ${vote_average}
        // ${IMG_URL+poster_path}
        // <h5 class="card-title">${title}</h5>