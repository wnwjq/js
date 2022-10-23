const login = document.querySelector(".login-input");
const form = document.querySelector(".login-form");
const loginText = document.querySelector(".login-Text");
const logout = document.querySelector(".logout");
function localLogin(e) {
    e.preventDefault();
    const loginValue = localStorage.setItem("id", login.value);
    form.style.visibility = "hidden";
    loginText.innerText = `${localStorage.getItem("id")}님 어서오세요.`;
}

form.addEventListener("submit", localLogin);

if (localStorage.getItem("id") !== null) {
    form.style.visibility = "hidden";
    loginText.innerText = `${localStorage.getItem("id")}님 어서오세요.`;
}

function localLogout() {
    localStorage.removeItem("id");
    loginText.innerText = "";
    login.value = ""
    form.style.visibility = "";
}

logout.addEventListener("click", localLogout);

//------------------------------------------------
const clock = document.querySelector(".clock-Text");



function time() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const h = date.getHours();
    const m = date.getMinutes();
    if (h < 12) {
        clock.innerText = `오전 ${h}:${m}
        ${year}-${month + 1}-${day}`;
    }
    else if (h > 12) {
        clock.innerText = `오후 ${h - 12}:${m}
        ${year}-${month + 1}-${day}`;
    }
}

setInterval(time, 1);

//--------------------------------
const weaterText = document.getElementsByTagName("span");

const API_KIY = "498d62a2f7a63ce0a74d1c0640c8b276";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KIY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const country = data.sys.country;
        const name = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        data.sys.country = "KR" ? weaterText[0].innerText = "대한민국"
            : data.sys.country = "MN" ? weaterText[0].innerText = "몽골"
                : data.sys.country = "US" ? weaterText[0].innerText = "미국"
                    : data.sys.country = "DE" ? weaterText[0].innerText = "독일"
                        : data.sys.country = "UR" ? weaterText[0].innerText = "러시아"
                            : data.sys.country = "UA" ? weaterText[0].innerText = "우크라이나"
                                : data.sys.country = "IR" ? weaterText[0].innerText = "이란"
                                    : data.sys.country = "EG" ? weaterText[0].innerText = "이집트"
                                        : data.sys.country = "IN" ? weaterText[0].innerText = "인도"
                                            : data.sys.country = "CN" ? weaterText[0].innerText = "중국"
                                                : data.sys.country = "CA" ? weaterText[0].innerText = "캐나다"
                                                    : "undefined";

        data.weather[0].main = "cloud" ? weaterText[2].innerText = "구름"
            : data.weather[0].main = "rain" ? weaterText[2].innerText = "비"
                : data.weather[0].main = "sun" ? weaterText[2].innerText = "해"
                    : data.weather[0].main = "sunshine" ? weaterText[2].innerText = "햇살"
                        : data.weather[0].main = "snow" ? weaterText[2].innerText = "눈"
                            : data.weather[0].main = "hail" ? weaterText[2].innerText = "우박"
                                : data.weather[0].main = "shower" ? weaterText[2].innerText = "소나기"
                                    : data.weather[0].main = "fog" ? weaterText[2].innerText = "안개"
                                        : data.weather[0].main = "thunder" ? weaterText[2].innerText = "천둥"
                                            : data.weather[0].main = "lightning" ? weaterText[2].innerText = "번개"
                                                : data.weather[0].main = "storm" ? weaterText[2].innerText = "폭풍"
                                                    : data.weather[0].main = "gale" ? weaterText[2].innerText = "강풍"
                                                        : data.weather[0].main = "tornado" ? weaterText[2].innerText = "토네이도"
                                                            : data.weather[0].main = "strong winds" ? weaterText[2].innerText = "센 바람"
                                                                : "undefined";

        weaterText[1].innerText = name;
        weaterText[3].innerText = `${temp}℃`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);