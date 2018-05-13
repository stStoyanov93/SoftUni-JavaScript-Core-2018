function isMailValid(email) {
    let pattern = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/;
    let isValid = pattern.test(email);

    return isValid ? 'Valid' : 'Invalid';
}