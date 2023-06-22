import axios from 'axios'

//const KEY = "4521ea10e13642d842f88ed8b117b08d105c5974"

export default axios.create({
    baseURL: "https://api.census.gov/data",
    params: {
        key: import.meta.env.VITE_CENSUS_KEY
    }
})

// const fetchInfo = async (year) => {
//     const response = await axios.get(`https://api.census.gov/data/${year}/cbp?get=EMP&for=us:*&key=4521ea10e13642d842f88ed8b117b08d105c5974`)
//     //const data = response.data
//     const employed = response.data[1][0]
 
//     return employed;
// }



// export default fetchInfo;

//https://api.census.gov/data/${year}/cbp?get=EMP&for=us:*&key=4521ea10e13642d842f88ed8b117b08d105c5974