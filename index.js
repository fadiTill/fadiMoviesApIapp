
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
//  const input = document.querySelector('input');
// input.addEventListener('input',  (event) => {
//     fetchData(event.target.value);

// })

const input = document.querySelector('input');
//create timeout with delay to avoid api call on each key input 
// const debounce = (func, delay = 1000) => {
//     let timeoutId;

//     return (...args) => {
//         if (timeoutId){ 
//             clearTimeout(timeoutId) 
//     };
//     timeoutId = setTimeout(() => {
//     func.apply(null, args);
//     // }, 1000)
//  }, delay)

//     }
// };

// // let timeoutId;
// const onInput = debounce(event => {
//     // const onInput = debounce(event => {

//     fetchData(event.target.value);

//     // if (timeoutId){ 
//     //    clearTimeout(timeoutId) 
//     // } 
//     //     timeoutId = setTimeout(() => {
//     //     fetchData(event.target.value);
//     //     }, 500)
//     // fetchData(event.target.value)


// });

// input.addEventListener('input',debounce(onInput, 500));

// // fetchData()


const onInput = debounce(event => {
    

    fetchData(event.target.value);

    


});

input.addEventListener('input',debounce(onInput, 500));
