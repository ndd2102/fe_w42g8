import axios from "axios";

const TICKET_API_BASE_URL = "http://13.229.208.69:8080/test/tickets"

class TicketServices {
    addShow(shows) {
        return axios.post(TICKET_API_BASE_URL, shows)
    }
    
}

export default new TicketServices()