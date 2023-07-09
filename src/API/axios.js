import axios from 'axios'


export default axios.create({
    baseURL: "https://api.census.gov/data",
    params: {
        key: import.meta.env.VITE_CENSUS_KEY
    }
})


