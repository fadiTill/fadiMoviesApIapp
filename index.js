
const fetchData = async (searchTerm) => {
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
};

const root = document.querySelector('.autocomplete');
root.innerHTML =`
<label><b>Search for Movie</b>label>
<input class="input"/>
<div class="dropdown">
<div class="dropdown-menu">
</div class="dropdown-content results">
</div>
`;


const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');


const onInput = async event => {
   const movies =  await fetchData(event.target.value);
   console.log(movies);

   for(let movie of movies) { 
       const div = document.createElement('div');

       div.innerHTML =` <img src=${movie.Poster}/>
                        <h1>${movie.Title}<h1/>
       `;
document.querySelector('#target').appendChild(div)
   }
};

input.addEventListener('input',debounce(onInput, 500));
