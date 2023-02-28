import axios from "axios";

// const FILM_API_BASE_URL = "http://localhost:8080/test/movies"
const FILM_API_BASE_URL = "http://13.229.208.69:8080/test/movies"
const REVENUE_API_BASE_URL = "http://13.229.208.69:8080/test/tickets/auditByid"
class FilmServices {
    getFilm() {
        return axios.get(FILM_API_BASE_URL)
    }
    getFilmTopRating() {
        return axios.get(FILM_API_BASE_URL + "/toprating")
    }
    addFilm(film) {
        return axios.post(FILM_API_BASE_URL, film)
    }
    getFilmByID(filmID) {
        return axios.get(FILM_API_BASE_URL + "/" + filmID)
    }
    editFilm(filmID, film) {
        return axios.put(FILM_API_BASE_URL +"/"+ filmID, film)
    }
    deleteFilm(filmID) {
        return axios.delete(FILM_API_BASE_URL + "/" + filmID)
    }
    revenueFilm(filmID) {
        return axios.get(REVENUE_API_BASE_URL + "/" + filmID)
    }
}

export default new FilmServices()