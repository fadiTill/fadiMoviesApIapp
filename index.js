
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
const input = document.querySelector('input');
input.addEventListener('input',  (event) => {
    fetchData(event.target.value);

})

// fetchData();