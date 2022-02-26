
const autocompleteConfig = {
  renderOption(movie){
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
    return ` <img src="${imgSrc}"/>
                            ${movie.Title} (${movie.Year})
           `;
  },

onOptionSelect(movie) {
  onMovieSelect(movie);
},
inputValue(movie){
  return movie.title
},
async fetchData(searchTerm)  {
  const response = await axios.get('http://www.omdbapi.com/',{
      params: {
apikey:'dfc61849',
// search operation
s:  searchTerm

//lookup
// i: 'tt0848228'
      }
  });


  if (response.data.Error){
    return []  
  }
return response.data.Search;
},
}

createAutoComplete({
  ...autocompleteConfig,
  root: document.querySelector('#left-autocomplete'),
  });
  createAutoComplete({
    ...autocompleteConfig,
    root: document.querySelector('#right-autocomplete'),
    });
  


// const root = document.querySelector('.autocomplete');
// root.innerHTML =`
// <label><b>Search For a Movie</b></label>
// <input class="input" />
// <div class="dropdown">
//   <div class="dropdown-menu">
//     <div class="dropdown-content results"></div>
//   </div>
// </div>
// `;




// const input = document.querySelector('input');
// const dropdown = document.querySelector('.dropdown');
// const resultsWrapper = document.querySelector('.results');


// const onInput = async event => {
//    const movies =  await fetchData(event.target.value);
//    console.log(movies);

//   if (!movies.length){
//     dropdown.classList.remove('is-active');
//     return;

//   }
   
//    resultsWrapper.innerHTML = '';
//    dropdown.classList.add('is-active');
//    for(let movie of movies) { 
//        const option = document.createElement('a');
//        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
       
//        option.classList.add('dropdown-item');
//        option.innerHTML =` <img src="${imgSrc}"/>
//                         ${movie.Title}
//        `;
//        option.addEventListener('click', () => {
//       dropdown.classList.remove('is-active');
//       input.value = movie.Title;
//       onMovieSelect(movie);
//        })

// resultsWrapper.appendChild(option);
//    }
// };

// input.addEventListener('input',debounce(onInput, 500));

// document.addEventListener('click', event =>{
//   // console.log(event.target)

//   if (!root.contains(event.target)){
//     dropdown.classList.remove('is-active');

//   }
// })









const  onMovieSelect = async (movie) => {
  // console.log(movie);
  const response = await axios.get('http://www.omdbapi.com/',{
    params: {
      apikey:'dfc61849',
     
       i:  movie.imdbID
      
     
              }
          });

          // console.log(response.data);
          document.querySelector('#summary').innerHTML = movieTemplate(response.data)
        }

        const movieTemplate = (movieDetail) => {
          return `
          <article class="media">
          <figure class ="media-left">
          <p class="image">
          <img src="${movieDetail.Poster}"/>
          </p>
          </figure>
          <div class="media-content">
          <div class="content">
          <h1>${movieDetail.Title}</h1>
          <h4>${movieDetail.Genre}</h4>
          <p>${movieDetail.Plot}</p>
          </article>
          <article class="notification is-primary">
          <class="title">${movieDetail.Awards}</p>
          <p class="subtitle">Awards<p/>
          </article>
          <article class="notification is-primary">
          <class="title">${movieDetail.BoxOffices}</p>
          <p class="subtitle">Box Offices<p/>
          </article>
          <article class="notification is-primary">
          <class="title">${movieDetail.Metascore}</p>
          <p class="subtitle">Score<p/>
          </article>
          <article class="notification is-primary">
          <class="title">${movieDetail.imdbRating}</p>
          <p class="subtitle">Rating<p/>
          </article>
          <article class="notification is-primary">
          <class="title">${movieDetail.imdbVotes}</p>
          <p class="subtitle">Votes<p/>
          </article>
          `;

        };