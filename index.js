
const fetchData = async () => {
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

fetchData();