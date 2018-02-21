for (x = 2; x <= 1000; x++) {
    isPrime = true;

    for (y = 2; y < x; y++) {
        if (x%y === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.write(x + "<br />");
    }
}