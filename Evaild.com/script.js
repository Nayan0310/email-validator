let clear = document.getElementById('clear');
let text = document.getElementById('text');
let submit = document.getElementById('submit');
let resultCont = document.getElementById('result');
let dtext = document.getElementById('default-text');
submit.style.cursor = "pointer";
submit.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`
    let key = "ema_live_W7DuQST80gVaXaICPeQzTrth3ADuejTtU0CSV6bT";
    let email = text.value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url);
    let result = await res.json();
    let str = ``
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str)
    resultCont.innerHTML = str;
})
clear.onclick = function clearfield() {
    text.value = '';
    resultCont.innerHTML = 'Try Another Email Address';
}
