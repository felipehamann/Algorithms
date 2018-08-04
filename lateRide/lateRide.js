function lateRide(n) {
    const hours = Math.floor(n / 60);
    const minutes = n % 60;
    const time = hours.toString().concat(minutes.toString()).split("");

    return time.reduce((a, b) => {
        return parseInt(a) + parseInt(b)
    });
}