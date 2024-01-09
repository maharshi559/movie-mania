import { getRandom, removeDuplicates } from "../../constants/Utils";
import { teluguMovies } from "../../constants/movies-lists";

export const getMoviesFromApiAsync = async () => {
    try {
        const response = await fetch(
            'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=te&api_key=90fa87227905b478ec18b2a6f5b8d8bf',
            options
        );
        const json = await response.json();
        const filteredTeluguMovies = removeDuplicates(teluguMovies).map(movie => {
            return {
                id: Math.floor((Math.random() * 100000)),
                title: movie
            }
        });

        const randomMovies = getRandom(json.results.concat(filteredTeluguMovies), 5);
        return randomMovies;
    } catch (error) {
        console.error(error);
    }
};

export const getMovieImageById = (id: string) => {
    return {
        uri: `https://image.tmdb.org/t/p/original/${id}`,
        ...options,

    };
}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGZhODcyMjc5MDViNDc4ZWMxOGIyYTZmNWI4ZDhiZiIsInN1YiI6IjY1OTA2NTBiYTU4OTAyNzExOTk1ZjBhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m5urh_PrCcOaLdyIsd49HUTb9AYinMs7SYHWkp7RhDA'
    }
};