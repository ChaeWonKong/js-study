var countdown = function(n) {
    if (n <= 0) {
        console.log("Over!");
        return;
    } else {
        console.log(n);
        countdown(n-1);
    }
}

function main() {
    countdown(10);
}

main();