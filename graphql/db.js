import axios from 'axios'
const BASE_URL = 'https://yts.mx/api/v2/'
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/onecall?lat=36.11&lon=128.34&appid=dc6fd7a40851c1bddcb20eea52f18325&lang=kr'

export const getMovies = async (limit, rating) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(LIST_MOVIES_URL, {
        params: {
            limit,
            minimum_rating: rating
        }
    })
    return movies
}

export const getMovie = async id => {
    const {
        data: {
            data: { movie }
        }
    } = await axios(MOVIE_DETAILS_URL, {
        params: {
            movie_id: id
        }
    })
    return movie
}

export const getSuggestions = async id => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id: id
        }
    })
    return movies
}

export const getWeather = async () => {
    const {
        data: {
            current: { weather }
        }
    } = await axios(WEATHER_URL)
    return weather
}