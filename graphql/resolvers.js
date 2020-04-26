import { getMovies, getMovie, getSuggestions, getWeather } from './db'

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id),
        weather: () => getWeather()
    },
}

export default resolvers;