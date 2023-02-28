import axios from "axios";

const ROOM_API_BASE_URL = "http://13.229.208.69:8080/test/cinemas"

class RoomServices {
    getCinema() {
        return axios.get(ROOM_API_BASE_URL)
    }
    
}

export default new RoomServices()