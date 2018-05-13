function printFilledForm(username, email, phone, data) {
    //let filledForm = [];

    for (let line of data) {
        line = line.replace(/<![a-zA-Z]+!>/g, username);
        line = line.replace(/<@[a-zA-Z]+@>/g, email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);
        console.log(line);
    }

    //judge does not accept returned values
    //return filledForm.join(\n);
}