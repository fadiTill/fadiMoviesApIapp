
const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/',{
        params: {
apikey:'dfc61849',
//search operation
// s: 'avengers'

//lookup
i: 'tt0848228'
        }
    });
console.log(response.data)
};
// const input = document.querySelector('input');
// input.addEventListener('input',  (event) => {
//     fetchData(event.target.value);

// })

const input = document.querySelector('input');
//create timeout with delay to avoid api call on each key input 
let timeoutId;
const onInput = event => {
    if (timeoutId){ 
       clearTimeout(timeoutId) 
    } 
        timeoutId = setTimeout(() => {
        fetchData(event.target.value);
        }, 1000)
    // fetchData(event.target.value)


};

input.addEventListener('input',onInput)
   
// fetchData();