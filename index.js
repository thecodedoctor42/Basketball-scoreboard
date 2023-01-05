let homeScoreEl = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");
let periodCountEl = document.getElementById("period-count");
let foulsHomeEl = document.getElementById("foulsHome");
let foulsGuestEl = document.getElementById("foulsGuest");

let homePoints = 0;
let periodCount = 0;
let guestPoints = 0;
let foulsHome = 0;
let foulsGuest = 0;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var twelveMinutes = 60 * 12,
        display = document.querySelector('#time');
    startTimer(twelveMinutes, display);
};

function add1Home() {
    homePoints += 1;
    homeScoreEl.textContent = homePoints;
}

function add2Home() {
    homePoints += 2;
    homeScoreEl.textContent = homePoints;
}
function add3Home() {
    homePoints += 3;
    homeScoreEl.textContent = homePoints;
}

function add1Period() {
    periodCount += 1;
    periodCountEl.textContent = periodCount;
}

function add1FoulHome() {
    foulsHome += 1;
    foulsHomeEl.textContent = foulsHome;
}

function add1FoulGuest() {
    foulsGuest += 1;
    foulsGuestEl.textContent = foulsGuest;
}

function add1Guest() {
    guestPoints += 1;
    guestScoreEl.textContent = guestPoints;
}
function add2Guest() {
    guestPoints += 2;
    guestScoreEl.textContent = guestPoints;
}
function add3Guest() {
    guestPoints += 3;
    guestScoreEl.textContent = guestPoints;
}

