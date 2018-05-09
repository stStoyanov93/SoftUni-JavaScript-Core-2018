function getTicketPrice(data) {
    let [movieName, dayOfWeek] = data;
    movieName = movieName.toLowerCase();
    dayOfWeek = dayOfWeek.toLowerCase();

    let validDays = ['monday', 'tuesday','wednesday','thursday','friday','saturday','sunday'];
    let validMovies = ["the godfather", "schindler's list", "casablanca", "the wizard of oz"];

    if (!validDays.includes(dayOfWeek) || !validMovies.includes(movieName)){
        return "error";
    }

    let ticketPrice = 0;

    if (movieName === "the godfather"){
        switch (dayOfWeek){
            case "monday":
                ticketPrice = 12;
                break;
            case "tuesday":
                ticketPrice = 10;
                break;
            case "thursday":
                ticketPrice = 12.50;
                break;
            case "saturday":
                ticketPrice = 25;
                break;
            case "sunday":
                ticketPrice = 30;
                break;
            default:
                ticketPrice = 15;
        }
    }

    let weekDays = ['monday', 'tuesday','wednesday','thursday','friday'];

    if (movieName == "schindler's list"){
        ticketPrice = weekDays.includes(dayOfWeek) ? 8.50 : 15;
    }
    else if (movieName == "casablanca"){
        ticketPrice = weekDays.includes(dayOfWeek) ? 8 : 10;
    }
    else if (movieName == "the wizard of oz"){
        ticketPrice = weekDays.includes(dayOfWeek) ? 10 : 15;
    }

    return ticketPrice;
}