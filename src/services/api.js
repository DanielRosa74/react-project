import axios from 'axios'

const api = axios.create({
    baseURL: 'https://swapi.dev/api'
})

async function fetchSWPeople(){
    try {
        const fetchData = await api.get('/people')
        return {
            success: true,
            data: fetchData.data,
        }
    } catch (error) {
        return {
            success: false,
            error,
        }
    }
}

export { api, fetchSWPeople }